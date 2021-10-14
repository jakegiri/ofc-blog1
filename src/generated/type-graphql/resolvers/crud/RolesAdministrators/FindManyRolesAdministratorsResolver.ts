import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyRolesAdministratorsArgs } from "./args/FindManyRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class FindManyRolesAdministratorsResolver {
  @TypeGraphQL.Query(_returns => [RolesAdministrators], {
    nullable: false
  })
  async findManyRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRolesAdministratorsArgs): Promise<RolesAdministrators[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
