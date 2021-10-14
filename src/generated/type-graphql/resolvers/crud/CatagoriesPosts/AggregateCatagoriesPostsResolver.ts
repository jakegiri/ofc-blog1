import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCatagoriesPostsArgs } from "./args/AggregateCatagoriesPostsArgs";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { AggregateCatagoriesPosts } from "../../outputs/AggregateCatagoriesPosts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CatagoriesPosts)
export class AggregateCatagoriesPostsResolver {
  @TypeGraphQL.Query(_returns => AggregateCatagoriesPosts, {
    nullable: false
  })
  async aggregateCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCatagoriesPostsArgs): Promise<AggregateCatagoriesPosts> {
    return getPrismaFromContext(ctx).catagoriesPosts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
