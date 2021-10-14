import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateNestedOneWithoutPostsInput } from "../inputs/CatagoryCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => CatagoryCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  catagory!: CatagoryCreateNestedOneWithoutPostsInput;
}
