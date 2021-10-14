import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsScalarWhereInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereInput], {
    nullable: true
  })
  AND?: RolesAdministratorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereInput], {
    nullable: true
  })
  OR?: RolesAdministratorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarWhereInput], {
    nullable: true
  })
  NOT?: RolesAdministratorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  roleId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  administratorId?: StringFilter | undefined;
}
