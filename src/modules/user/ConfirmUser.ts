import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { confirmationPrefix } from "../../constants/redisPrefixes";
import { MyContext } from "../../types/MyContext";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg("token") token: string, @Ctx() ctx: MyContext) {
    const userId = await ctx.redis.get(confirmationPrefix + token); // CHECK IF USERID EXIST WITH GIVEN TOKEN SESSION
    if (!userId) return false; // IF USER-ID DONT EXIST
    await ctx.prisma.user.update({
      where: { id: userId },
      data: { confirmed: true },
    }); // update confirmation status to database
    await ctx.redis.del(token); //del redis stored token
    return true;
  }
}
