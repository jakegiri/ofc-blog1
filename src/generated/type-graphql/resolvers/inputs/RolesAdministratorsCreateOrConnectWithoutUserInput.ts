import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateWithoutUserInput } from "../inputs/RolesAdministratorsCreateWithoutUserInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: false
  })
  where!: RolesAdministratorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateWithoutUserInput, {
    nullable: false
  })
  create!: RolesAdministratorsCreateWithoutUserInput;
}
