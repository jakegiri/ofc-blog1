import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersWhereInput {
  @TypeGraphQL.Field(_type => [PostsUsersWhereInput], {
    nullable: true
  })
  AND?: PostsUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereInput], {
    nullable: true
  })
  OR?: PostsUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereInput], {
    nullable: true
  })
  NOT?: PostsUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
