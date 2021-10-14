import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateOneRequiredWithoutAdmistratorsInput } from "../inputs/RoleUpdateOneRequiredWithoutAdmistratorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => RoleUpdateOneRequiredWithoutAdmistratorsInput, {
    nullable: true
  })
  role?: RoleUpdateOneRequiredWithoutAdmistratorsInput | undefined;
}
