import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Role } from "../models/Role";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class RolesAdministrators {
  role?: Role;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  roleId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  administratorId!: string;
}
