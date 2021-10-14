import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersWhereUniqueInput } from "../../../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;
}
