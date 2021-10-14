import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsUpdateInput } from "../../../inputs/RolesAdministratorsUpdateInput";
import { RolesAdministratorsWhereUniqueInput } from "../../../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsUpdateInput, {
    nullable: false
  })
  data!: RolesAdministratorsUpdateInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: false
  })
  where!: RolesAdministratorsWhereUniqueInput;
}
