import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyUserInputEnvelope } from "../inputs/PostsUsersCreateManyUserInputEnvelope";
import { PostsUsersCreateOrConnectWithoutUserInput } from "../inputs/PostsUsersCreateOrConnectWithoutUserInput";
import { PostsUsersCreateWithoutUserInput } from "../inputs/PostsUsersCreateWithoutUserInput";
import { PostsUsersScalarWhereInput } from "../inputs/PostsUsersScalarWhereInput";
import { PostsUsersUpdateManyWithWhereWithoutUserInput } from "../inputs/PostsUsersUpdateManyWithWhereWithoutUserInput";
import { PostsUsersUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostsUsersUpdateWithWhereUniqueWithoutUserInput";
import { PostsUsersUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostsUsersUpsertWithWhereUniqueWithoutUserInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostsUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostsUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostsUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostsUsersUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostsUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: PostsUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  set?: PostsUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostsUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersWhereUniqueInput], {
    nullable: true
  })
  delete?: PostsUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostsUsersUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostsUsersUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostsUsersScalarWhereInput[] | undefined;
}
