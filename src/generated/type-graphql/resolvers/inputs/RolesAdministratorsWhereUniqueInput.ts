import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput } from "../inputs/RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsWhereUniqueInput {
  @TypeGraphQL.Field(_type => RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput, {
    nullable: true
  })
  roleId_administratorId?: RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput | undefined;
}
