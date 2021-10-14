import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateWithoutPostsInput } from "../inputs/CatagoryCreateWithoutPostsInput";
import { CatagoryUpdateWithoutPostsInput } from "../inputs/CatagoryUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => CatagoryUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: CatagoryUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => CatagoryCreateWithoutPostsInput, {
    nullable: false
  })
  create!: CatagoryCreateWithoutPostsInput;
}
