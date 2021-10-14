import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryOrderByInput } from "../../../inputs/CatagoryOrderByInput";
import { CatagoryWhereInput } from "../../../inputs/CatagoryWhereInput";
import { CatagoryWhereUniqueInput } from "../../../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCatagoryArgs {
  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  where?: CatagoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CatagoryOrderByInput], {
    nullable: true
  })
  orderBy?: CatagoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CatagoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
