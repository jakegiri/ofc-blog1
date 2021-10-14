import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  roleId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  administratorId!: string;
}
