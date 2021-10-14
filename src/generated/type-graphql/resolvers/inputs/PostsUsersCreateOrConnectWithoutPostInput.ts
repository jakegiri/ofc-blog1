import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateWithoutPostInput } from "../inputs/PostsUsersCreateWithoutPostInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUsersCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostsUsersCreateWithoutPostInput;
}
