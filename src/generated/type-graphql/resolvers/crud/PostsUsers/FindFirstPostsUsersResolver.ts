import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPostsUsersArgs } from "./args/FindFirstPostsUsersArgs";
import { PostsUsers } from "../../../models/PostsUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostsUsers)
export class FindFirstPostsUsersResolver {
  @TypeGraphQL.Query(_returns => PostsUsers, {
    nullable: true
  })
  async findFirstPostsUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostsUsersArgs): Promise<PostsUsers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postsUsers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
