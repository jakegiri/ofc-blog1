import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsWhereInput } from "../../../inputs/RolesAdministratorsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  where?: RolesAdministratorsWhereInput | undefined;
}
