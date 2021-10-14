import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByRolesAdministratorsArgs } from "./args/GroupByRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { RolesAdministratorsGroupBy } from "../../outputs/RolesAdministratorsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class GroupByRolesAdministratorsResolver {
  @TypeGraphQL.Query(_returns => [RolesAdministratorsGroupBy], {
    nullable: false
  })
  async groupByRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRolesAdministratorsArgs): Promise<RolesAdministratorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
