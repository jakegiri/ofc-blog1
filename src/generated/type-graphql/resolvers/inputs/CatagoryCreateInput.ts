import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateNestedManyWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateNestedManyWithoutCatagoryInput";
import { PostCreateNestedManyWithoutMainCatagoryInput } from "../inputs/PostCreateNestedManyWithoutMainCatagoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutMainCatagoryInput, {
    nullable: true
  })
  mainCatagoryPosts?: PostCreateNestedManyWithoutMainCatagoryInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateNestedManyWithoutCatagoryInput, {
    nullable: true
  })
  posts?: CatagoriesPostsCreateNestedManyWithoutCatagoryInput | undefined;
}
