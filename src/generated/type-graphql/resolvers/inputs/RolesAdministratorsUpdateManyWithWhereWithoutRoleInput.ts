import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsScalarWhereInput } from "../inputs/RolesAdministratorsScalarWhereInput";
import { RolesAdministratorsUpdateManyMutationInput } from "../inputs/RolesAdministratorsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsUpdateManyWithWhereWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesAdministratorsScalarWhereInput, {
    nullable: false
  })
  where!: RolesAdministratorsScalarWhereInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RolesAdministratorsUpdateManyMutationInput;
}
