import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsListRelationFilter } from "../inputs/CatagoriesPostsListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryWhereInput {
  @TypeGraphQL.Field(_type => [CatagoryWhereInput], {
    nullable: true
  })
  AND?: CatagoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoryWhereInput], {
    nullable: true
  })
  OR?: CatagoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoryWhereInput], {
    nullable: true
  })
  NOT?: CatagoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  mainCatagoryPosts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsListRelationFilter, {
    nullable: true
  })
  posts?: CatagoriesPostsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  modifiedAt?: DateTimeNullableFilter | undefined;
}
