import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostsUsersArgs } from "./args/AggregatePostsUsersArgs";
import { PostsUsers } from "../../../models/PostsUsers";
import { AggregatePostsUsers } from "../../outputs/AggregatePostsUsers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostsUsers)
export class AggregatePostsUsersResolver {
  @TypeGraphQL.Query(_returns => AggregatePostsUsers, {
    nullable: false
  })
  async aggregatePostsUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostsUsersArgs): Promise<AggregatePostsUsers> {
    return getPrismaFromContext(ctx).postsUsers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
