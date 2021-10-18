import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";

import { User } from "../../shared/generated/type-graphql";
import prisma from "../../clients/prismaClient";
import { RegisterInputs } from "./register/RegisterInputs";
import { sendEmail } from "../../utils/sendEmail";
import { confirmationPrefix } from "../../constants/redisPrefixes";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import redis from "../../clients/redisClient";

async function createConfirmationUrl(userId: string): Promise<string> {
  const token = v4();
  await redis.set(confirmationPrefix + token, userId, "ex", 60 * 60 * 60 * 24); // 1day expiratino
  return `http://localhost:4000/user/confirm/${token}`;
}

function errorHandler(err: any) {
  // USER ALREADY EXIST ERROR
  if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
    throw new Error(
      "User already exist for this email. Please try to login with different email"
    );
  }
}

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello this is hello executed";
  }

  @Mutation(() => User, { nullable: true })
  async register(
    @Arg("data") { firstName, lastName, email, password }: RegisterInputs
  ): Promise<User | null> {
    //data for user creation
    const hashedPassword = await bcrypt.hash(password, 12);
    const dataForUserCreation = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };

    // TRY (CREATING USER) CATCH (IF USER EXISTS)
    try {
      const user = await prisma.user.create({ data: dataForUserCreation });
      await sendEmail(email, await createConfirmationUrl(user.id));
      return user;
    } catch (err) {
      // IF USER ALREADY EXIST ERROR
      errorHandler(err);
      //REST ERRORS
      throw err;
    }
  }
}
