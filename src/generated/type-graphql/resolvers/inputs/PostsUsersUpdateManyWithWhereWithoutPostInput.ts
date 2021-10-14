import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersScalarWhereInput } from "../inputs/PostsUsersScalarWhereInput";
import { PostsUsersUpdateManyMutationInput } from "../inputs/PostsUsersUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostsUsersScalarWhereInput, {
    nullable: false
  })
  where!: PostsUsersScalarWhereInput;

  @TypeGraphQL.Field(_type => PostsUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostsUsersUpdateManyMutationInput;
}
