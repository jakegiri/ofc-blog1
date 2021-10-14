import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyPostInputEnvelope } from "../inputs/CatagoriesPostsCreateManyPostInputEnvelope";
import { CatagoriesPostsCreateOrConnectWithoutPostInput } from "../inputs/CatagoriesPostsCreateOrConnectWithoutPostInput";
import { CatagoriesPostsCreateWithoutPostInput } from "../inputs/CatagoriesPostsCreateWithoutPostInput";
import { CatagoriesPostsScalarWhereInput } from "../inputs/CatagoriesPostsScalarWhereInput";
import { CatagoriesPostsUpdateManyWithWhereWithoutPostInput } from "../inputs/CatagoriesPostsUpdateManyWithWhereWithoutPostInput";
import { CatagoriesPostsUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CatagoriesPostsUpdateWithWhereUniqueWithoutPostInput";
import { CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateWithoutPostInput], {
    nullable: true
  })
  create?: CatagoriesPostsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CatagoriesPostsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CatagoriesPostsCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: CatagoriesPostsUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: CatagoriesPostsUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CatagoriesPostsScalarWhereInput[] | undefined;
}
