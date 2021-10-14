import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersUpdateManyMutationInput } from "../../../inputs/PostsUsersUpdateManyMutationInput";
import { PostsUsersWhereInput } from "../../../inputs/PostsUsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostsUsersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  where?: PostsUsersWhereInput | undefined;
}
