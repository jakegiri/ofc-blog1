import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersCreateInput } from "../../../inputs/PostsUsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersCreateInput, {
    nullable: false
  })
  data!: PostsUsersCreateInput;
}
