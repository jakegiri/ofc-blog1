import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsWhereInput } from "../inputs/RolesAdministratorsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsListRelationFilter {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  every?: RolesAdministratorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  some?: RolesAdministratorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  none?: RolesAdministratorsWhereInput | undefined;
}
