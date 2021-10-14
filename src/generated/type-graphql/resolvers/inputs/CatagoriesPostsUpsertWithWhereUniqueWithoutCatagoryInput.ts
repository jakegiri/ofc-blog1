import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateWithoutCatagoryInput } from "../inputs/CatagoriesPostsCreateWithoutCatagoryInput";
import { CatagoriesPostsUpdateWithoutCatagoryInput } from "../inputs/CatagoriesPostsUpdateWithoutCatagoryInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateWithoutCatagoryInput, {
    nullable: false
  })
  update!: CatagoriesPostsUpdateWithoutCatagoryInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateWithoutCatagoryInput, {
    nullable: false
  })
  create!: CatagoriesPostsCreateWithoutCatagoryInput;
}
