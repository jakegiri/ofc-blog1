import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateWithoutPostInput } from "../inputs/PostsUsersCreateWithoutPostInput";
import { PostsUsersUpdateWithoutPostInput } from "../inputs/PostsUsersUpdateWithoutPostInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUsersUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostsUsersUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostsUsersCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostsUsersCreateWithoutPostInput;
}
