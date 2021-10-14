import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersUpdateWithoutUserInput } from "../inputs/PostsUsersUpdateWithoutUserInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostsUsersWhereUniqueInput, {
    nullable: false
  })
  where!: PostsUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUsersUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostsUsersUpdateWithoutUserInput;
}
