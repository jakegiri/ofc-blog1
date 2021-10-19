import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import bcrypt from "bcryptjs";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";
import { createConfirmationUrl } from "../../utils/createUserConfirmationUrl";
import { sendEmail } from "../../utils/sendEmail";
import { RegisterInputs } from "./register/RegisterInputs";

function errorHandler(err: any): never {
  // USER ALREADY EXIST ERROR
  if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
    throw new Error(
      "User already exist for this email. Please try to login with different email"
    );
  }
  throw err; //REST ERRORS
}

//#######################################################
//#######################################################
//###########         MAIN          #####################
//#######################################################
//#######################################################

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello this is hello executed";
  }

  @Mutation(() => User, { nullable: true })
  async register(
    @Arg("data") { firstName, lastName, email, password }: RegisterInputs,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    // THROW ERROR IF USER IS ALREADY LOGGED IN
    if (ctx.mySession) {
      throw new Error(
        "User is already logged in. Log out to register new user"
      );
    }
    // HASHED PASSWORD
    const hashedPassword = await bcrypt.hash(password, 12);
    // DATA FOR USER CREATION
    const dataForUserCreation = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };
    // TRY (CREATING USER) CATCH (IF USER EXISTS)
    try {
      const user = await ctx.prisma.user.create({ data: dataForUserCreation });
      await sendEmail(email, await createConfirmationUrl(user.id));
      return user;
    } catch (err) {
      errorHandler(err); // IF USER ALREADY EXIST ERROR
    }
  }
}
