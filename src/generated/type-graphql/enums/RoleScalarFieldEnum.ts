import * as TypeGraphQL from "type-graphql";

export enum RoleScalarFieldEnum {
  id = "id",
  name = "name",
  canQueryUsers = "canQueryUsers",
  canCrudUsers = "canCrudUsers",
  canQueryRoles = "canQueryRoles",
  canCrudRoles = "canCrudRoles",
  canQueryPosts = "canQueryPosts",
  canCrudPosts = "canCrudPosts",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});
