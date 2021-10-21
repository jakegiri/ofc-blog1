import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Post, PostCreateInput } from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class CreatePostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg("data") data: PostCreateInput,
    @Ctx() ctx: MyContext
  ): Promise<Post> {
    const post = await ctx.prisma.post.create({ data });
    return post;
  }
}
