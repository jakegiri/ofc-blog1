import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CatagoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CatagoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CatagoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CatagoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  modifiedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
