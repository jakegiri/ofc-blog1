import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryUpdateOneRequiredWithoutPostsInput } from "../inputs/CatagoryUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => CatagoryUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  catagory?: CatagoryUpdateOneRequiredWithoutPostsInput | undefined;
}
