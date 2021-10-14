import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutRolesInput } from "../inputs/UserCreateNestedOneWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateWithoutRoleInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRolesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRolesInput;
}
