import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateWithoutCatagoryInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateOrConnectWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateWithoutCatagoryInput, {
    nullable: false
  })
  create!: CatagoriesPostsCreateWithoutCatagoryInput;
}
