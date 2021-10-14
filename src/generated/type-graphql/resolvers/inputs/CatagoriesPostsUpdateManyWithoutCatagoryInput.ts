import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyCatagoryInputEnvelope } from "../inputs/CatagoriesPostsCreateManyCatagoryInputEnvelope";
import { CatagoriesPostsCreateOrConnectWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateOrConnectWithoutCatagoryInput";
import { CatagoriesPostsCreateWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateWithoutCatagoryInput";
import { CatagoriesPostsScalarWhereInput } from "../inputs/CatagoriesPostsScalarWhereInput";
import { CatagoriesPostsUpdateManyWithWhereWithoutCatagoryInput } from "../inputs/CatagoriesPostsUpdateManyWithWhereWithoutCatagoryInput";
import { CatagoriesPostsUpdateWithWhereUniqueWithoutCatagoryInput } from "../inputs/CatagoriesPostsUpdateWithWhereUniqueWithoutCatagoryInput";
import { CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput } from "../inputs/CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateManyWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateWithoutCatagoryInput], {
    nullable: true
  })
  create?: CatagoriesPostsCreateWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateOrConnectWithoutCatagoryInput], {
    nullable: true
  })
  connectOrCreate?: CatagoriesPostsCreateOrConnectWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput], {
    nullable: true
  })
  upsert?: CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateManyCatagoryInputEnvelope, {
    nullable: true
  })
  createMany?: CatagoriesPostsCreateManyCatagoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: CatagoriesPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  set?: CatagoriesPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CatagoriesPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  delete?: CatagoriesPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpdateWithWhereUniqueWithoutCatagoryInput], {
    nullable: true
  })
  update?: CatagoriesPostsUpdateWithWhereUniqueWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpdateManyWithWhereWithoutCatagoryInput], {
    nullable: true
  })
  updateMany?: CatagoriesPostsUpdateManyWithWhereWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CatagoriesPostsScalarWhereInput[] | undefined;
}
