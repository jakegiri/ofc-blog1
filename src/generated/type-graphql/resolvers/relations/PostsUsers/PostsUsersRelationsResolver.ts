import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { PostsUsers } from "../../../models/PostsUsers";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostsUsers)
export class PostsUsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() postsUsers: PostsUsers, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).postsUsers.findUnique({
      where: {
        postId_userId: {
          postId: postsUsers.postId,
          userId: postsUsers.userId,
        },
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() postsUsers: PostsUsers, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).postsUsers.findUnique({
      where: {
        postId_userId: {
          postId: postsUsers.postId,
          userId: postsUsers.userId,
        },
      },
    }).user({});
  }
}
