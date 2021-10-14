import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryOrderByInput } from "../../../inputs/CatagoryOrderByInput";
import { CatagoryScalarWhereWithAggregatesInput } from "../../../inputs/CatagoryScalarWhereWithAggregatesInput";
import { CatagoryWhereInput } from "../../../inputs/CatagoryWhereInput";
import { CatagoryScalarFieldEnum } from "../../../../enums/CatagoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  where?: CatagoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CatagoryOrderByInput], {
    nullable: true
  })
  orderBy?: CatagoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "modifiedAt">;

  @TypeGraphQL.Field(_type => CatagoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CatagoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
