import { Args, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";
import { FindManyPostArgs } from "./args/FindManyPostsArgs";

@Resolver()
export class FindManyPostResolver {
  @Query(() => [Post], { nullable: true })
  async posts(
    @Ctx() ctx: MyContext,
    @Args() args: FindManyPostArgs
  ): Promise<Post[]> {
    const { limit: take, offset: skip, ...rest } = args;

    return await ctx.prisma.post.findMany({ ...rest, skip, take });
  }
}
