import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCreateManyCatagoryInput } from "../inputs/CatagoriesPostsCreateManyCatagoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsCreateManyCatagoryInputEnvelope {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateManyCatagoryInput], {
    nullable: false
  })
  data!: CatagoriesPostsCreateManyCatagoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
