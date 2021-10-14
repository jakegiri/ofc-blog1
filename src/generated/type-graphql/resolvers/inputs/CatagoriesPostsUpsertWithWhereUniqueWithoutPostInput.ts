import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateWithoutPostInput } from "../inputs/CatagoriesPostsCreateWithoutPostInput";
import { CatagoriesPostsUpdateWithoutPostInput } from "../inputs/CatagoriesPostsUpdateWithoutPostInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateWithoutPostInput, {
    nullable: false
  })
  update!: CatagoriesPostsUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateWithoutPostInput, {
    nullable: false
  })
  create!: CatagoriesPostsCreateWithoutPostInput;
}
