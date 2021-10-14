import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateOneRequiredWithoutAdmistratorsInput } from "../inputs/RoleUpdateOneRequiredWithoutAdmistratorsInput";
import { UserUpdateOneRequiredWithoutRolesInput } from "../inputs/UserUpdateOneRequiredWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateInput {
  @TypeGraphQL.Field(_type => RoleUpdateOneRequiredWithoutAdmistratorsInput, {
    nullable: true
  })
  role?: RoleUpdateOneRequiredWithoutAdmistratorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRolesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRolesInput | undefined;
}
