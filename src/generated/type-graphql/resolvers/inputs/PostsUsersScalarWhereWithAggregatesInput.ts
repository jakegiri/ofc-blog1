import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostsUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostsUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostsUsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
