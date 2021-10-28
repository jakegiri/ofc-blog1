import { Args, Ctx, Query, Resolver } from "type-graphql";
import { FindManyPostArgs, Post } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class FindManyPostResolver {
  @Query(() => [Post], { nullable: true })
  async posts(
    @Ctx() ctx: MyContext,
    @Args() args: FindManyPostArgs
  ): Promise<Post[]> {
    return await ctx.prisma.post.findMany({ ...args });
  }
}
