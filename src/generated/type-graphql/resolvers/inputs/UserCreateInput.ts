import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCreateNestedManyWithoutUserInput } from "../inputs/PostsUsersCreateNestedManyWithoutUserInput";
import { RolesAdministratorsCreateNestedManyWithoutUserInput } from "../inputs/RolesAdministratorsCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

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

  @TypeGraphQL.Field(_type => PostsUsersCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostsUsersCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RolesAdministratorsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  roles?: RolesAdministratorsCreateNestedManyWithoutUserInput | undefined;
}
