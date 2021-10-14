import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateNestedOneWithoutAdmistratorsInput } from "../inputs/RoleCreateNestedOneWithoutAdmistratorsInput";
import { UserCreateNestedOneWithoutRolesInput } from "../inputs/UserCreateNestedOneWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateInput {
  @TypeGraphQL.Field(_type => RoleCreateNestedOneWithoutAdmistratorsInput, {
    nullable: false
  })
  role!: RoleCreateNestedOneWithoutAdmistratorsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRolesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRolesInput;
}
