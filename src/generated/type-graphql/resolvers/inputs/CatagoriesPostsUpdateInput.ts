import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryUpdateOneRequiredWithoutPostsInput } from "../inputs/CatagoryUpdateOneRequiredWithoutPostsInput";
import { PostUpdateOneRequiredWithoutCatagoriesInput } from "../inputs/PostUpdateOneRequiredWithoutCatagoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateInput {
  @TypeGraphQL.Field(_type => CatagoryUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  catagory?: CatagoryUpdateOneRequiredWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCatagoriesInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutCatagoriesInput | undefined;
}
