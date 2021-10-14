import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsUpdateManyMutationInput } from "../../../inputs/RolesAdministratorsUpdateManyMutationInput";
import { RolesAdministratorsWhereInput } from "../../../inputs/RolesAdministratorsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RolesAdministratorsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  where?: RolesAdministratorsWhereInput | undefined;
}
