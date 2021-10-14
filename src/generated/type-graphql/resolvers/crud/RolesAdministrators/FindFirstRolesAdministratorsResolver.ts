import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstRolesAdministratorsArgs } from "./args/FindFirstRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class FindFirstRolesAdministratorsResolver {
  @TypeGraphQL.Query(_returns => RolesAdministrators, {
    nullable: true
  })
  async findFirstRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
