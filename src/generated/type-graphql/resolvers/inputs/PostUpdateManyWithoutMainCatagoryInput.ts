import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyMainCatagoryInputEnvelope } from "../inputs/PostCreateManyMainCatagoryInputEnvelope";
import { PostCreateOrConnectWithoutMainCatagoryInput } from "../inputs/PostCreateOrConnectWithoutMainCatagoryInput";
import { PostCreateWithoutMainCatagoryInput } from "../inputs/PostCreateWithoutMainCatagoryInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutMainCatagoryInput } from "../inputs/PostUpdateManyWithWhereWithoutMainCatagoryInput";
import { PostUpdateWithWhereUniqueWithoutMainCatagoryInput } from "../inputs/PostUpdateWithWhereUniqueWithoutMainCatagoryInput";
import { PostUpsertWithWhereUniqueWithoutMainCatagoryInput } from "../inputs/PostUpsertWithWhereUniqueWithoutMainCatagoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutMainCatagoryInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutMainCatagoryInput], {
    nullable: true
  })
  create?: PostCreateWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutMainCatagoryInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutMainCatagoryInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyMainCatagoryInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyMainCatagoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutMainCatagoryInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutMainCatagoryInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
