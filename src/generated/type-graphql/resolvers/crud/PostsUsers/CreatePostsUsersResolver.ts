import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePostsUsersArgs } from "./args/CreatePostsUsersArgs";
import { PostsUsers } from "../../../models/PostsUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostsUsers)
export class CreatePostsUsersResolver {
  @TypeGraphQL.Mutation(_returns => PostsUsers, {
    nullable: false
  })
  async createPostsUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePostsUsersArgs): Promise<PostsUsers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postsUsers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
