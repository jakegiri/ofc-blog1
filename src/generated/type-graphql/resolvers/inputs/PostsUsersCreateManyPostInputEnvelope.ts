import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyPostInput } from "../inputs/PostsUsersCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostsUsersCreateManyPostInput], {
    nullable: false
  })
  data!: PostsUsersCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
