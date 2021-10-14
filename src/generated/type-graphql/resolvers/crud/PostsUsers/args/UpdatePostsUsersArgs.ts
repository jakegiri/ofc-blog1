import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersUpdateInput } from "../../../inputs/PostsUsersUpdateInput";
import { PostsUsersWhereUniqueInput } from "../../../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersUpdateInput, {
    nullable: false
  })
  data!: PostsUsersUpdateInput;

  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;
}
