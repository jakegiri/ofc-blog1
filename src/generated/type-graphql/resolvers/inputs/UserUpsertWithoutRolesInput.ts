import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRolesInput } from "../inputs/UserCreateWithoutRolesInput";
import { UserUpdateWithoutRolesInput } from "../inputs/UserUpdateWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutRolesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRolesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRolesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRolesInput, {
    nullable: false
  })
  create!: UserCreateWithoutRolesInput;
}
