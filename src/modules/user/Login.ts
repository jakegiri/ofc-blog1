import bcrypt from "bcryptjs";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    // IF USER IS ALREADY LOGGED IN, THROW ERROR
    if (ctx.mySession) {
      throw new Error(
        "User is already logged in. Log out to register new user"
      );
    }

    // RETRIEVE USER FROM DATABASE
    const user = await ctx.prisma.user.findUnique({ where: { email } });

    // IF NO USER FOUND, RETURN NULL
    if (!user) return null;

    // IS PASSWORD VALID
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // IF PASSWORD NOT VALID, RETURN NULL
    if (!isPasswordValid) return null;

    // CHECK - HAS USER DONE EMAIL CONFIRMTION WHILE SIGNING IN
    if (!user.confirmed) {
      throw new Error("Email Verification not done yet");
    }
    ctx.req.session = { ...user, userId: user.id };
    return user;
  }
}
