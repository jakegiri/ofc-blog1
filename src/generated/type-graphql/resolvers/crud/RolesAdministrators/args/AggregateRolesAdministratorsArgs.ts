import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsOrderByInput } from "../../../inputs/RolesAdministratorsOrderByInput";
import { RolesAdministratorsWhereInput } from "../../../inputs/RolesAdministratorsWhereInput";
import { RolesAdministratorsWhereUniqueInput } from "../../../inputs/RolesAdministratorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  where?: RolesAdministratorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsOrderByInput], {
    nullable: true
  })
  orderBy?: RolesAdministratorsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RolesAdministratorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
