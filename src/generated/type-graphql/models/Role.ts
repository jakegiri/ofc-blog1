import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { RolesAdministrators } from "../models/RolesAdministrators";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Role {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  admistrators?: RolesAdministrators[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryUsers?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudUsers?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryRoles?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudRoles?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canQueryPosts?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCrudPosts?: boolean | null;

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
