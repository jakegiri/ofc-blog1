import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class RolesAdministratorsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Role, {
    nullable: false
  })
  async role(@TypeGraphQL.Root() rolesAdministrators: RolesAdministrators, @TypeGraphQL.Ctx() ctx: any): Promise<Role> {
    return getPrismaFromContext(ctx).rolesAdministrators.findUnique({
      where: {
        roleId_administratorId: {
          roleId: rolesAdministrators.roleId,
          administratorId: rolesAdministrators.administratorId,
        },
      },
    }).role({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() rolesAdministrators: RolesAdministrators, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).rolesAdministrators.findUnique({
      where: {
        roleId_administratorId: {
          roleId: rolesAdministrators.roleId,
          administratorId: rolesAdministrators.administratorId,
        },
      },
    }).user({});
  }
}
