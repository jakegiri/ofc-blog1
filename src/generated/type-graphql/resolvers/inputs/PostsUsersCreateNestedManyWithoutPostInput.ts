import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyPostInputEnvelope } from "../inputs/PostsUsersCreateManyPostInputEnvelope";
import { PostsUsersCreateOrConnectWithoutPostInput } from "../inputs/PostsUsersCreateOrConnectWithoutPostInput";
import { PostsUsersCreateWithoutPostInput } from "../inputs/PostsUsersCreateWithoutPostInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostsUsersCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostsUsersCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostsUsersCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsUsersCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostsUsersCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: PostsUsersWhereUniqueInput[] | undefined;
}
