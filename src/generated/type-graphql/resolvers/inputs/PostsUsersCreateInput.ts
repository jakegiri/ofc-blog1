import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutUsersInput } from "../inputs/PostCreateNestedOneWithoutUsersInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateInput {
  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostsInput;
}
