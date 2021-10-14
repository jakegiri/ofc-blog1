import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutAdmistratorsInput } from "../inputs/RoleCreateOrConnectWithoutAdmistratorsInput";
import { RoleCreateWithoutAdmistratorsInput } from "../inputs/RoleCreateWithoutAdmistratorsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateNestedOneWithoutAdmistratorsInput {
  @TypeGraphQL.Field(_type => RoleCreateWithoutAdmistratorsInput, {
    nullable: true
  })
  create?: RoleCreateWithoutAdmistratorsInput | undefined;

  @TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutAdmistratorsInput, {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutAdmistratorsInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  connect?: RoleWhereUniqueInput | undefined;
}
