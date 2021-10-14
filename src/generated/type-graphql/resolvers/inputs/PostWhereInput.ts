import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsListRelationFilter } from "../inputs/CatagoriesPostsListRelationFilter";
import { CatagoryRelationFilter } from "../inputs/CatagoryRelationFilter";
import { PostsUsersListRelationFilter } from "../inputs/PostsUsersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostsUsersListRelationFilter, {
    nullable: true
  })
  users?: PostsUsersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsListRelationFilter, {
    nullable: true
  })
  catagories?: CatagoriesPostsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CatagoryRelationFilter, {
    nullable: true
  })
  mainCatagory?: CatagoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mainCatagoryId?: StringFilter | undefined;
}
