import { Ctx, Mutation, Resolver } from "type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext) {
    return new Promise((res, rej) =>
      ctx.req.session.destroy((err) => {
        if (err) {
          console.log(err);
          rej(false);
        }
        ctx.res.clearCookie("qid");
        res(true);
      })
    );
  }
}
