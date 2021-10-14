import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCreateWithoutPostsInput } from "../inputs/CatagoryCreateWithoutPostsInput";
import { CatagoryWhereUniqueInput } from "../inputs/CatagoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoryCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => CatagoryWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoryCreateWithoutPostsInput, {
    nullable: false
  })
  create!: CatagoryCreateWithoutPostsInput;
}
