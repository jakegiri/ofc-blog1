import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCatagoriesInput } from "../inputs/PostCreateWithoutCatagoriesInput";
import { PostUpdateWithoutCatagoriesInput } from "../inputs/PostUpdateWithoutCatagoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutCatagoriesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCatagoriesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCatagoriesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCatagoriesInput, {
    nullable: false
  })
  create!: PostCreateWithoutCatagoriesInput;
}
