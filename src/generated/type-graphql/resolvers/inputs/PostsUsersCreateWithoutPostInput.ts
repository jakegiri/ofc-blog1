import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostsInput;
}
