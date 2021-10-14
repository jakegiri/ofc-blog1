import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateOrConnectWithoutPostsInput } from "../inputs/CatagoryCreateOrConnectWithoutPostsInput";
import { CatagoryCreateWithoutPostsInput } from "../inputs/CatagoryCreateWithoutPostsInput";
import { CatagoryWhereUniqueInput } from "../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => CatagoryCreateWithoutPostsInput, {
    nullable: true
  })
  create?: CatagoryCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: CatagoryCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CatagoryWhereUniqueInput | undefined;
}
