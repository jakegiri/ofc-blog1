import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCatagoryIdPostIdCompoundUniqueInput } from "../inputs/CatagoriesPostsCatagoryIdPostIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsWhereUniqueInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsCatagoryIdPostIdCompoundUniqueInput, {
    nullable: true
  })
  catagoryId_postId?: CatagoriesPostsCatagoryIdPostIdCompoundUniqueInput | undefined;
}
