import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateManyPostInputEnvelope } from "../inputs/PostsUsersCreateManyPostInputEnvelope";
import { PostsUsersCreateOrConnectWithoutPostInput } from "../inputs/PostsUsersCreateOrConnectWithoutPostInput";
import { PostsUsersCreateWithoutPostInput } from "../inputs/PostsUsersCreateWithoutPostInput";
import { PostsUsersScalarWhereInput } from "../inputs/PostsUsersScalarWhereInput";
import { PostsUsersUpdateManyWithWhereWithoutPostInput } from "../inputs/PostsUsersUpdateManyWithWhereWithoutPostInput";
import { PostsUsersUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostsUsersUpdateWithWhereUniqueWithoutPostInput";
import { PostsUsersUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostsUsersUpsertWithWhereUniqueWithoutPostInput";
import { PostsUsersWhereUniqueInput } from "../inputs/PostsUsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostsUsersCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostsUsersCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostsUsersCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostsUsersUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsUsersCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostsUsersCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostsUsersUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostsUsersUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostsUsersUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostsUsersScalarWhereInput[] | undefined;
}
