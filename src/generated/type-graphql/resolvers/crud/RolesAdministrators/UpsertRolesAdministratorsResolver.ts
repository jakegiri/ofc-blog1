import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertRolesAdministratorsArgs } from "./args/UpsertRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class UpsertRolesAdministratorsResolver {
  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: false
  })
  async upsertRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertRolesAdministratorsArgs): Promise<RolesAdministrators> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
