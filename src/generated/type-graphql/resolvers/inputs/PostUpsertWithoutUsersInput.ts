import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUsersInput } from "../inputs/PostCreateWithoutUsersInput";
import { PostUpdateWithoutUsersInput } from "../inputs/PostUpdateWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUsersInput, {
    nullable: false
  })
  create!: PostCreateWithoutUsersInput;
}
