import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CatagoriesPostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CatagoriesPostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CatagoriesPostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  catagoryId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;
}
