import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateNestedManyWithoutRoleInput } from "../inputs/RolesAdministratorsCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryUsers?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudUsers?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryRoles?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudRoles?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryPosts?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudPosts?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  admistrators?: RolesAdministratorsCreateNestedManyWithoutRoleInput | undefined;
}
