import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsWhereInput {
  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereInput], {
    nullable: true
  })
  AND?: RolesAdministratorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereInput], {
    nullable: true
  })
  OR?: RolesAdministratorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsWhereInput], {
    nullable: true
  })
  NOT?: RolesAdministratorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => RoleRelationFilter, {
    nullable: true
  })
  role?: RoleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  roleId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  administratorId?: StringFilter | undefined;
}
