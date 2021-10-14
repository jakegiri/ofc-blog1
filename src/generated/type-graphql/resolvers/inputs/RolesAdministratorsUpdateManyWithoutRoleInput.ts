import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyRoleInputEnvelope } from "../inputs/RolesAdministratorsCreateManyRoleInputEnvelope";
import { RolesAdministratorsCreateOrConnectWithoutRoleInput } from "../inputs/RolesAdministratorsCreateOrConnectWithoutRoleInput";
import { RolesAdministratorsCreateWithoutRoleInput } from "../inputs/RolesAdministratorsCreateWithoutRoleInput";
import { RolesAdministratorsScalarWhereInput } from "../inputs/RolesAdministratorsScalarWhereInput";
import { RolesAdministratorsUpdateManyWithWhereWithoutRoleInput } from "../inputs/RolesAdministratorsUpdateManyWithWhereWithoutRoleInput";
import { RolesAdministratorsUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/RolesAdministratorsUpdateWithWhereUniqueWithoutRoleInput";
import { RolesAdministratorsUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/RolesAdministratorsUpsertWithWhereUniqueWithoutRoleInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateWithoutRoleInput], {
    nullable: true
  })
  create?: RolesAdministratorsCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: RolesAdministratorsCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  upsert?: RolesAdministratorsUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: RolesAdministratorsCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolesAdministratorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  set?: RolesAdministratorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RolesAdministratorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereUniqueInput], {
    nullable: true
  })
  delete?: RolesAdministratorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: RolesAdministratorsUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpdateManyWithWhereWithoutRoleInput], {
    nullable: true
  })
  updateMany?: RolesAdministratorsUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RolesAdministratorsScalarWhereInput[] | undefined;
}
