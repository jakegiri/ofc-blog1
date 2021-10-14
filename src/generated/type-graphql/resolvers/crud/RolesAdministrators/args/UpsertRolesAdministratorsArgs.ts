import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsCreateInput } from "../../../inputs/RolesAdministratorsCreateInput";
import { RolesAdministratorsUpdateInput } from "../../../inputs/RolesAdministratorsUpdateInput";
import { RolesAdministratorsWhereUniqueInput } from "../../../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: false
  })
  where!: RolesAdministratorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateInput, {
    nullable: false
  })
  create!: RolesAdministratorsCreateInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsUpdateInput, {
    nullable: false
  })
  update!: RolesAdministratorsUpdateInput;
}
