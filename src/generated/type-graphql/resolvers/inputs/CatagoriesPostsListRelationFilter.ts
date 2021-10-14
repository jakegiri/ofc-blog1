import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsWhereInput } from "../inputs/CatagoriesPostsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsListRelationFilter {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  every?: CatagoriesPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  some?: CatagoriesPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  none?: CatagoriesPostsWhereInput | undefined;
}
