import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateOrConnectWithoutMainCatagoryPostsInput } from "../inputs/CatagoryCreateOrConnectWithoutMainCatagoryPostsInput";
import { CatagoryCreateWithoutMainCatagoryPostsInput } from "../inputs/CatagoryCreateWithoutMainCatagoryPostsInput";
import { CatagoryUpdateWithoutMainCatagoryPostsInput } from "../inputs/CatagoryUpdateWithoutMainCatagoryPostsInput";
import { CatagoryUpsertWithoutMainCatagoryPostsInput } from "../inputs/CatagoryUpsertWithoutMainCatagoryPostsInput";
import { CatagoryWhereUniqueInput } from "../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput {
  @TypeGraphQL.Field(_type => CatagoryCreateWithoutMainCatagoryPostsInput, {
    nullable: true
  })
  create?: CatagoryCreateWithoutMainCatagoryPostsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryCreateOrConnectWithoutMainCatagoryPostsInput, {
    nullable: true
  })
  connectOrCreate?: CatagoryCreateOrConnectWithoutMainCatagoryPostsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryUpsertWithoutMainCatagoryPostsInput, {
    nullable: true
  })
  upsert?: CatagoryUpsertWithoutMainCatagoryPostsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CatagoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryUpdateWithoutMainCatagoryPostsInput, {
    nullable: true
  })
  update?: CatagoryUpdateWithoutMainCatagoryPostsInput | undefined;
}
