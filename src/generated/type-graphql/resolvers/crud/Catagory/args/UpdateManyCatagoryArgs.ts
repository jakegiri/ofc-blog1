import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryUpdateManyMutationInput } from "../../../inputs/CatagoryUpdateManyMutationInput";
import { CatagoryWhereInput } from "../../../inputs/CatagoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CatagoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  where?: CatagoryWhereInput | undefined;
}
