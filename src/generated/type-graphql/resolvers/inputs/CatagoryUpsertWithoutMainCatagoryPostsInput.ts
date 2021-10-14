import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateWithoutMainCatagoryPostsInput } from "../inputs/CatagoryCreateWithoutMainCatagoryPostsInput";
import { CatagoryUpdateWithoutMainCatagoryPostsInput } from "../inputs/CatagoryUpdateWithoutMainCatagoryPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryUpsertWithoutMainCatagoryPostsInput {
  @TypeGraphQL.Field(_type => CatagoryUpdateWithoutMainCatagoryPostsInput, {
    nullable: false
  })
  update!: CatagoryUpdateWithoutMainCatagoryPostsInput;

  @TypeGraphQL.Field(_type => CatagoryCreateWithoutMainCatagoryPostsInput, {
    nullable: false
  })
  create!: CatagoryCreateWithoutMainCatagoryPostsInput;
}
