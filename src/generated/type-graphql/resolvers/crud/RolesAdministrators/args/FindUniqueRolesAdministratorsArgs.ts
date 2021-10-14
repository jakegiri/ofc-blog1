import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsWhereUniqueInput } from "../../../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: false
  })
  where!: RolesAdministratorsWhereUniqueInput;
}
