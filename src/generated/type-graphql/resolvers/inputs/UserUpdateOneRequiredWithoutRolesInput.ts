import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRolesInput } from "../inputs/UserCreateOrConnectWithoutRolesInput";
import { UserCreateWithoutRolesInput } from "../inputs/UserCreateWithoutRolesInput";
import { UserUpdateWithoutRolesInput } from "../inputs/UserUpdateWithoutRolesInput";
import { UserUpsertWithoutRolesInput } from "../inputs/UserUpsertWithoutRolesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRolesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRolesInput, {
    nullable: true
  })
  create?: UserCreateWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRolesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRolesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRolesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRolesInput | undefined;
}
