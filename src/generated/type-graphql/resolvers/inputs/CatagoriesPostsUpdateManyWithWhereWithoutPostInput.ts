import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsScalarWhereInput } from "../inputs/CatagoriesPostsScalarWhereInput";
import { CatagoriesPostsUpdateManyMutationInput } from "../inputs/CatagoriesPostsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => CatagoriesPostsScalarWhereInput, {
    nullable: false
  })
  where!: CatagoriesPostsScalarWhereInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CatagoriesPostsUpdateManyMutationInput;
}
