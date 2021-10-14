import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersWhereInput } from "../../../inputs/PostsUsersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  where?: PostsUsersWhereInput | undefined;
}
