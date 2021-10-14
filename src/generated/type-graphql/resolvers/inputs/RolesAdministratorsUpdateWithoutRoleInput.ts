import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutRolesInput } from "../inputs/UserUpdateOneRequiredWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateWithoutRoleInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRolesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRolesInput | undefined;
}
