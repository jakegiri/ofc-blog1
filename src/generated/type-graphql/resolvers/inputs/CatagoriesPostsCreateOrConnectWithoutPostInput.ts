import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateWithoutPostInput } from "../inputs/CatagoriesPostsCreateWithoutPostInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateWithoutPostInput, {
    nullable: false
  })
  create!: CatagoriesPostsCreateWithoutPostInput;
}
