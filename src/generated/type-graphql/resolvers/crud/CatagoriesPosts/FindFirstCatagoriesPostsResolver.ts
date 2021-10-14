import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCatagoriesPostsArgs } from "./args/FindFirstCatagoriesPostsArgs";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CatagoriesPosts)
export class FindFirstCatagoriesPostsResolver {
  @TypeGraphQL.Query(_returns => CatagoriesPosts, {
    nullable: true
  })
  async findFirstCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCatagoriesPostsArgs): Promise<CatagoriesPosts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
