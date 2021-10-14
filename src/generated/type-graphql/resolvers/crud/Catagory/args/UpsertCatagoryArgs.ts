import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryCreateInput } from "../../../inputs/CatagoryCreateInput";
import { CatagoryUpdateInput } from "../../../inputs/CatagoryUpdateInput";
import { CatagoryWhereUniqueInput } from "../../../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoryCreateInput, {
    nullable: false
  })
  create!: CatagoryCreateInput;

  @TypeGraphQL.Field(_type => CatagoryUpdateInput, {
    nullable: false
  })
  update!: CatagoryUpdateInput;
}
