import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateWithoutMainCatagoryPostsInput } from "../inputs/CatagoryCreateWithoutMainCatagoryPostsInput";
import { CatagoryWhereUniqueInput } from "../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryCreateOrConnectWithoutMainCatagoryPostsInput {
  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoryCreateWithoutMainCatagoryPostsInput, {
    nullable: false
  })
  create!: CatagoryCreateWithoutMainCatagoryPostsInput;
}
