import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyUserInputEnvelope } from "../inputs/PostsUsersCreateManyUserInputEnvelope";
import { PostsUsersCreateOrConnectWithoutUserInput } from "../inputs/PostsUsersCreateOrConnectWithoutUserInput";
import { PostsUsersCreateWithoutUserInput } from "../inputs/PostsUsersCreateWithoutUserInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostsUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostsUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostsUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostsUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: PostsUsersWhereUniqueInput[] | undefined;
}
