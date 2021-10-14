import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersCreateInput } from "../../../inputs/PostsUsersCreateInput";
import { PostsUsersUpdateInput } from "../../../inputs/PostsUsersUpdateInput";
import { PostsUsersWhereUniqueInput } from "../../../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUsersCreateInput, {
    nullable: false
  })
  create!: PostsUsersCreateInput;

  @TypeGraphQL.Field(_type => PostsUsersUpdateInput, {
    nullable: false
  })
  update!: PostsUsersUpdateInput;
}
