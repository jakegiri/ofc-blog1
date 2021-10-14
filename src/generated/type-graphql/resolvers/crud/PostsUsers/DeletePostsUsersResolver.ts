import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePostsUsersArgs } from "./args/DeletePostsUsersArgs";
import { PostsUsers } from "../../../models/PostsUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostsUsers)
export class DeletePostsUsersResolver {
  @TypeGraphQL.Mutation(_returns => PostsUsers, {
    nullable: true
  })
  async deletePostsUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePostsUsersArgs): Promise<PostsUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postsUsers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
