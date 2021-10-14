import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutCatagoriesInput } from "../inputs/PostCreateNestedOneWithoutCatagoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCatagoriesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCatagoriesInput;
}
