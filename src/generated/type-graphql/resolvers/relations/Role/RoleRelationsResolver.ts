import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { RoleAdmistratorsArgs } from "./args/RoleAdmistratorsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class RoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [RolesAdministrators], {
    nullable: false
  })
  async admistrators(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoleAdmistratorsArgs): Promise<RolesAdministrators[]> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        id: role.id,
      },
    }).admistrators(args);
  }
}
