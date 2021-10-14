import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyPostInput } from "../inputs/CatagoriesPostsCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateManyPostInput], {
    nullable: false
  })
  data!: CatagoriesPostsCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
