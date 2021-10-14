import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryWhereInput } from "../inputs/CatagoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryRelationFilter {
  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  is?: CatagoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryWhereInput, {
    nullable: true
  })
  isNot?: CatagoryWhereInput | undefined;
}
