import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryOrderByInput } from "../../../inputs/CatagoryOrderByInput";
import { CatagoryWhereInput } from "../../../inputs/CatagoryWhereInput";
import { CatagoryWhereUniqueInput } from "../../../inputs/CatagoryWhereUniqueInput";
import { CatagoryScalarFieldEnum } from "../../../../enums/CatagoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCatagoryArgs {
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

  @TypeGraphQL.Field(_type => [CatagoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createdAt" | "modifiedAt"> | undefined;
}
