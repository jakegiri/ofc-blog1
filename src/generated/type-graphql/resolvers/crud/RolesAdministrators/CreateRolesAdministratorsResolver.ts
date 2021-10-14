import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateRolesAdministratorsArgs } from "./args/CreateRolesAdministratorsArgs";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class CreateRolesAdministratorsResolver {
  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: false
  })
  async createRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateRolesAdministratorsArgs): Promise<RolesAdministrators> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
