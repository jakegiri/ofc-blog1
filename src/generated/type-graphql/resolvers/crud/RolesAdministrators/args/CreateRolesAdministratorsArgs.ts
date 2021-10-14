import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsCreateInput } from "../../../inputs/RolesAdministratorsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsCreateInput, {
    nullable: false
  })
  data!: RolesAdministratorsCreateInput;
}
