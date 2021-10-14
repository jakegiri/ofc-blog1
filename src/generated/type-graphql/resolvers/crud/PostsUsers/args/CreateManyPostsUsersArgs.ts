import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersCreateManyInput } from "../../../inputs/PostsUsersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostsUsersArgs {
  @TypeGraphQL.Field(_type => [PostsUsersCreateManyInput], {
    nullable: false
  })
  data!: PostsUsersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
