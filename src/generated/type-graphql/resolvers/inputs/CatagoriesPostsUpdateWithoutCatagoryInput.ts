import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneRequiredWithoutCatagoriesInput } from "../inputs/PostUpdateOneRequiredWithoutCatagoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateWithoutCatagoryInput {
  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCatagoriesInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutCatagoriesInput | undefined;
}
