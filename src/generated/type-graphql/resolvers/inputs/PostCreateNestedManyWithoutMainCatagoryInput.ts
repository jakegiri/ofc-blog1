import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyMainCatagoryInputEnvelope } from "../inputs/PostCreateManyMainCatagoryInputEnvelope";
import { PostCreateOrConnectWithoutMainCatagoryInput } from "../inputs/PostCreateOrConnectWithoutMainCatagoryInput";
import { PostCreateWithoutMainCatagoryInput } from "../inputs/PostCreateWithoutMainCatagoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutMainCatagoryInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutMainCatagoryInput], {
    nullable: true
  })
  create?: PostCreateWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutMainCatagoryInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutMainCatagoryInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyMainCatagoryInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyMainCatagoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
