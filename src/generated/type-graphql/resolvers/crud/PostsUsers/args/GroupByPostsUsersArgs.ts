import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersOrderByInput } from "../../../inputs/PostsUsersOrderByInput";
import { PostsUsersScalarWhereWithAggregatesInput } from "../../../inputs/PostsUsersScalarWhereWithAggregatesInput";
import { PostsUsersWhereInput } from "../../../inputs/PostsUsersWhereInput";
import { PostsUsersScalarFieldEnum } from "../../../../enums/PostsUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostsUsersArgs {
  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  where?: PostsUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersOrderByInput], {
    nullable: true
  })
  orderBy?: PostsUsersOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"postId" | "userId">;

  @TypeGraphQL.Field(_type => PostsUsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostsUsersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
