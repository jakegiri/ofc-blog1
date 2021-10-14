import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutUsersInput } from "../inputs/PostCreateOrConnectWithoutUsersInput";
import { PostCreateWithoutUsersInput } from "../inputs/PostCreateWithoutUsersInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutUsersInput, {
    nullable: true
  })
  create?: PostCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
