import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryWhereUniqueInput } from "../../../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoryWhereUniqueInput;
}
