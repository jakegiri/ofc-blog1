import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PostsUsers } from "../models/PostsUsers";
import { RolesAdministrators } from "../models/RolesAdministrators";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  password?: string | null;

  posts?: PostsUsers[];

  roles?: RolesAdministrators[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | null;
}
