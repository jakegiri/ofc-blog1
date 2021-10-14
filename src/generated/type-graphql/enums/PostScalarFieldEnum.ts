import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  mainCatagoryId = "mainCatagoryId"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
