import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class RolesAdministratorsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  roleId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  administratorId!: string | null;
}
