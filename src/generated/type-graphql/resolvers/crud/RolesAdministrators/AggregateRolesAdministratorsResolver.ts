import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesAdministratorsArgs } from "./args/AggregateRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { AggregateRolesAdministrators } from "../../outputs/AggregateRolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class AggregateRolesAdministratorsResolver {
  @TypeGraphQL.Query(_returns => AggregateRolesAdministrators, {
    nullable: false
  })
  async aggregateRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRolesAdministratorsArgs): Promise<AggregateRolesAdministrators> {
    return getPrismaFromContext(ctx).rolesAdministrators.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
