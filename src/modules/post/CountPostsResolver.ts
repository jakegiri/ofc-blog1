import { Args, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../types";
import { CountPostsArgs } from "./args/CountPostsArgs";

@Resolver()
export class CountPostsResolver {
  @Query(() => Number)
  async postsCount(
    @Args() args: CountPostsArgs,
    @Ctx() ctx: MyContext
  ): Promise<number> {
    const { limit: take, offset: skip, ...rest } = args;

    return await ctx.prisma.post.count({ ...rest, take, skip });
  }
}
