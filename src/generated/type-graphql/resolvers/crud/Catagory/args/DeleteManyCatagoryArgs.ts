import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryWhereInput } from "../../../inputs/CatagoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  where?: CatagoryWhereInput | undefined;
}
