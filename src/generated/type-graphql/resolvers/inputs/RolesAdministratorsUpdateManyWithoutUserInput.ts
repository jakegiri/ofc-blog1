import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyUserInputEnvelope } from "../inputs/RolesAdministratorsCreateManyUserInputEnvelope";
import { RolesAdministratorsCreateOrConnectWithoutUserInput } from "../inputs/RolesAdministratorsCreateOrConnectWithoutUserInput";
import { RolesAdministratorsCreateWithoutUserInput } from "../inputs/RolesAdministratorsCreateWithoutUserInput";
import { RolesAdministratorsScalarWhereInput } from "../inputs/RolesAdministratorsScalarWhereInput";
import { RolesAdministratorsUpdateManyWithWhereWithoutUserInput } from "../inputs/RolesAdministratorsUpdateManyWithWhereWithoutUserInput";
import { RolesAdministratorsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RolesAdministratorsUpdateWithWhereUniqueWithoutUserInput";
import { RolesAdministratorsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RolesAdministratorsUpsertWithWhereUniqueWithoutUserInput";
import { RolesAdministratorsWhereUniqueInput } from "../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateWithoutUserInput], {
    nullable: true
  })
  create?: RolesAdministratorsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RolesAdministratorsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RolesAdministratorsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RolesAdministratorsCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RolesAdministratorsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RolesAdministratorsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RolesAdministratorsScalarWhereInput[] | undefined;
}
