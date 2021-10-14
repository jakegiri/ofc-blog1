import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsOrderByInput } from "../../../inputs/RolesAdministratorsOrderByInput";
import { RolesAdministratorsScalarWhereWithAggregatesInput } from "../../../inputs/RolesAdministratorsScalarWhereWithAggregatesInput";
import { RolesAdministratorsWhereInput } from "../../../inputs/RolesAdministratorsWhereInput";
import { RolesAdministratorsScalarFieldEnum } from "../../../../enums/RolesAdministratorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => RolesAdministratorsWhereInput, {
    nullable: true
  })
  where?: RolesAdministratorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsOrderByInput], {
    nullable: true
  })
  orderBy?: RolesAdministratorsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesAdministratorsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"roleId" | "administratorId">;

  @TypeGraphQL.Field(_type => RolesAdministratorsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RolesAdministratorsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
