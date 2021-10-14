import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateWithoutRoleInput } from "../inputs/RolesAdministratorsCreateWithoutRoleInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateOrConnectWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: false
  })
  where!: RolesAdministratorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateWithoutRoleInput, {
    nullable: false
  })
  create!: RolesAdministratorsCreateWithoutRoleInput;
}
