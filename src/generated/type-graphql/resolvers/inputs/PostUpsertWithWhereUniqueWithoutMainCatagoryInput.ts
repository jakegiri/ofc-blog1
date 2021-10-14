import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutMainCatagoryInput } from "../inputs/PostCreateWithoutMainCatagoryInput";
import { PostUpdateWithoutMainCatagoryInput } from "../inputs/PostUpdateWithoutMainCatagoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutMainCatagoryInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutMainCatagoryInput, {
    nullable: false
  })
  update!: PostUpdateWithoutMainCatagoryInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutMainCatagoryInput, {
    nullable: false
  })
  create!: PostCreateWithoutMainCatagoryInput;
}
