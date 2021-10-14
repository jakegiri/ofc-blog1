import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RolesAdministratorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RolesAdministratorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RolesAdministratorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  roleId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  administratorId?: StringWithAggregatesFilter | undefined;
}
