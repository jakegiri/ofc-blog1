import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateNestedOneWithoutPostsInput } from "../inputs/CatagoryCreateNestedOneWithoutPostsInput";
import { PostCreateNestedOneWithoutCatagoriesInput } from "../inputs/PostCreateNestedOneWithoutCatagoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateInput {
  @TypeGraphQL.Field(_type => CatagoryCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  catagory!: CatagoryCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCatagoriesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCatagoriesInput;
}
