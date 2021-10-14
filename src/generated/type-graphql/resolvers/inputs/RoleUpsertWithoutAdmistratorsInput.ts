import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutAdmistratorsInput } from "../inputs/RoleCreateWithoutAdmistratorsInput";
import { RoleUpdateWithoutAdmistratorsInput } from "../inputs/RoleUpdateWithoutAdmistratorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpsertWithoutAdmistratorsInput {
  @TypeGraphQL.Field(_type => RoleUpdateWithoutAdmistratorsInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutAdmistratorsInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutAdmistratorsInput, {
    nullable: false
  })
  create!: RoleCreateWithoutAdmistratorsInput;
}
