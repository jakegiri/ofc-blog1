import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsUpdateManyWithoutCatagoryInput } from "../inputs/CatagoriesPostsUpdateManyWithoutCatagoryInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PostUpdateManyWithoutMainCatagoryInput } from "../inputs/PostUpdateManyWithoutMainCatagoryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  modifiedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutMainCatagoryInput, {
    nullable: true
  })
  mainCatagoryPosts?: PostUpdateManyWithoutMainCatagoryInput | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateManyWithoutCatagoryInput, {
    nullable: true
  })
  posts?: CatagoriesPostsUpdateManyWithoutCatagoryInput | undefined;
}
