import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleOrderByInput } from "../../../inputs/RoleOrderByInput";
import { RoleScalarWhereWithAggregatesInput } from "../../../inputs/RoleScalarWhereWithAggregatesInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleScalarFieldEnum } from "../../../../enums/RoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoleOrderByInput], {
    nullable: true
  })
  orderBy?: RoleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "canQueryUsers" | "canCrudUsers" | "canQueryRoles" | "canCrudRoles" | "canQueryPosts" | "canCrudPosts" | "createdAt" | "modifiedAt" | "deletedAt">;

  @TypeGraphQL.Field(_type => RoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
