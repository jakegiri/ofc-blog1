import * as TypeGraphQL from "type-graphql";

export enum CatagoryScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  modifiedAt = "modifiedAt"
}
TypeGraphQL.registerEnumType(CatagoryScalarFieldEnum, {
  name: "CatagoryScalarFieldEnum",
  description: undefined,
});
