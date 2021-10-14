import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryCreateInput } from "../../../inputs/CatagoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryCreateInput, {
    nullable: false
  })
  data!: CatagoryCreateInput;
}
