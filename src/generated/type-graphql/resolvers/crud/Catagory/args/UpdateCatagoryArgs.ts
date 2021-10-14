import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryUpdateInput } from "../../../inputs/CatagoryUpdateInput";
import { CatagoryWhereUniqueInput } from "../../../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryUpdateInput, {
    nullable: false
  })
  data!: CatagoryUpdateInput;

  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoryWhereUniqueInput;
}
