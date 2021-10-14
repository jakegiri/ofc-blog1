import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyRoleInputEnvelope } from "../inputs/RolesAdministratorsCreateManyRoleInputEnvelope";
import { RolesAdministratorsCreateOrConnectWithoutRoleInput } from "../inputs/RolesAdministratorsCreateOrConnectWithoutRoleInput";
import { RolesAdministratorsCreateWithoutRoleInput } from "../inputs/RolesAdministratorsCreateWithoutRoleInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateNestedManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateWithoutRoleInput], {
    nullable: true
  })
  create?: RolesAdministratorsCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: RolesAdministratorsCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: RolesAdministratorsCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolesAdministratorsWhereUniqueInput[] | undefined;
}
