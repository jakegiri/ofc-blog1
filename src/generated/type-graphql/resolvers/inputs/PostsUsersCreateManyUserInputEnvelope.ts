import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyUserInput } from "../inputs/PostsUsersCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostsUsersCreateManyUserInput], {
    nullable: false
  })
  data!: PostsUsersCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
