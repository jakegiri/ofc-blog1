import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyUserInputEnvelope } from "../inputs/RolesAdministratorsCreateManyUserInputEnvelope";
import { RolesAdministratorsCreateOrConnectWithoutUserInput } from "../inputs/RolesAdministratorsCreateOrConnectWithoutUserInput";
import { RolesAdministratorsCreateWithoutUserInput } from "../inputs/RolesAdministratorsCreateWithoutUserInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateWithoutUserInput], {
    nullable: true
  })
  create?: RolesAdministratorsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RolesAdministratorsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RolesAdministratorsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolesAdministratorsWhereUniqueInput[] | undefined;
}
