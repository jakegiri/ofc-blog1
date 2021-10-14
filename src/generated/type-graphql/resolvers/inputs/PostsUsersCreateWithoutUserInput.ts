import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutUsersInput } from "../inputs/PostCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutUsersInput;
}
