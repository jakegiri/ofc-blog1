import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUsersOrderByInput } from "../../../inputs/PostsUsersOrderByInput";
import { PostsUsersWhereInput } from "../../../inputs/PostsUsersWhereInput";
import { PostsUsersWhereUniqueInput } from "../../../inputs/PostsUsersWhereUniqueInput";
import { PostsUsersScalarFieldEnum } from "../../../../enums/PostsUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserPostsArgs {
  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  where?: PostsUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersOrderByInput], {
    nullable: true
  })
  orderBy?: PostsUsersOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostsUsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"postId" | "userId"> | undefined;
}
