import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRolesAdministratorsArgs } from "./args/FindUniqueRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class FindUniqueRolesAdministratorsResolver {
  @TypeGraphQL.Query(_returns => RolesAdministrators, {
    nullable: true
  })
  async findUniqueRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
