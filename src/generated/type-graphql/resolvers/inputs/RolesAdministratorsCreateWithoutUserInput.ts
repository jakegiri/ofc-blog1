import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateNestedOneWithoutAdmistratorsInput } from "../inputs/RoleCreateNestedOneWithoutAdmistratorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => RoleCreateNestedOneWithoutAdmistratorsInput, {
    nullable: false
  })
  role!: RoleCreateNestedOneWithoutAdmistratorsInput;
}
