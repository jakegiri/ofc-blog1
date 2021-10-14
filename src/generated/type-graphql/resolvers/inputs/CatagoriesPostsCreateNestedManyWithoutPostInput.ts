import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyPostInputEnvelope } from "../inputs/CatagoriesPostsCreateManyPostInputEnvelope";
import { CatagoriesPostsCreateOrConnectWithoutPostInput } from "../inputs/CatagoriesPostsCreateOrConnectWithoutPostInput";
import { CatagoriesPostsCreateWithoutPostInput } from "../inputs/CatagoriesPostsCreateWithoutPostInput";
import { CatagoriesPostsWhereUniqueInput } from "../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateWithoutPostInput], {
    nullable: true
  })
  create?: CatagoriesPostsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CatagoriesPostsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CatagoriesPostsCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: CatagoriesPostsWhereUniqueInput[] | undefined;
}
