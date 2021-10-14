import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyMainCatagoryInput } from "../inputs/PostCreateManyMainCatagoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyMainCatagoryInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyMainCatagoryInput], {
    nullable: false
  })
  data!: PostCreateManyMainCatagoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
