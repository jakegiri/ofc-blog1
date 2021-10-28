import { Args, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";
import { FindManyPostArgs } from "./args/FindManyPostsArgs";

@Resolver()
export class FindManyPostResolver {
  @Query(() => [Post], { nullable: true })
  async posts(
    @Ctx() ctx: MyContext,
    @Args()
    { where, orderBy, cursor, limit, offset, distinct }: FindManyPostArgs
  ): Promise<Post[]> {
    return await ctx.prisma.post.findMany({
      where,
      orderBy,
      cursor,
      take: limit,
      skip: offset,
      distinct,
    });
  }
}
