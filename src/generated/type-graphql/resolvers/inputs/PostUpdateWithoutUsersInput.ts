import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsUpdateManyWithoutPostInput } from "../inputs/CatagoriesPostsUpdateManyWithoutPostInput";
import { CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput } from "../inputs/CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateManyWithoutPostInput, {
    nullable: true
  })
  catagories?: CatagoriesPostsUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput, {
    nullable: true
  })
  mainCatagory?: CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput | undefined;
}
