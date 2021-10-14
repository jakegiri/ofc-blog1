import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyCatagoryInputEnvelope } from "../inputs/CatagoriesPostsCreateManyCatagoryInputEnvelope";
import { CatagoriesPostsCreateOrConnectWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateOrConnectWithoutCatagoryInput";
import { CatagoriesPostsCreateWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateWithoutCatagoryInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateNestedManyWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateWithoutCatagoryInput], {
    nullable: true
  })
  create?: CatagoriesPostsCreateWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateOrConnectWithoutCatagoryInput], {
    nullable: true
  })
  connectOrCreate?: CatagoriesPostsCreateOrConnectWithoutCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateManyCatagoryInputEnvelope, {
    nullable: true
  })
  createMany?: CatagoriesPostsCreateManyCatagoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: CatagoriesPostsWhereUniqueInput[] | undefined;
}
