import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCatagoriesPostsArgs } from "./args/FindManyCatagoriesPostsArgs";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CatagoriesPosts)
export class FindManyCatagoriesPostsResolver {
  @TypeGraphQL.Query(_returns => [CatagoriesPosts], {
    nullable: false
  })
  async findManyCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCatagoriesPostsArgs): Promise<CatagoriesPosts[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
