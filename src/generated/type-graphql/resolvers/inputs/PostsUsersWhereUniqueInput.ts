import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersPostIdUserIdCompoundUniqueInput } from "../inputs/PostsUsersPostIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersWhereUniqueInput {
  @TypeGraphQL.Field(_type => PostsUsersPostIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  postId_userId?: PostsUsersPostIdUserIdCompoundUniqueInput | undefined;
}
