import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateNestedManyWithoutPostInput } from "../inputs/CatagoriesPostsCreateNestedManyWithoutPostInput";
import { CatagoryCreateNestedOneWithoutMainCatagoryPostsInput } from "../inputs/CatagoryCreateNestedOneWithoutMainCatagoryPostsInput";
import { PostsUsersCreateNestedManyWithoutPostInput } from "../inputs/PostsUsersCreateNestedManyWithoutPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => PostsUsersCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  users?: PostsUsersCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  catagories?: CatagoriesPostsCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryCreateNestedOneWithoutMainCatagoryPostsInput, {
    nullable: false
  })
  mainCatagory!: CatagoryCreateNestedOneWithoutMainCatagoryPostsInput;
}
