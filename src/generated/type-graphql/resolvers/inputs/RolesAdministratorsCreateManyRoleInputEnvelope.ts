import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyRoleInput } from "../inputs/RolesAdministratorsCreateManyRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateManyRoleInputEnvelope {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateManyRoleInput], {
    nullable: false
  })
  data!: RolesAdministratorsCreateManyRoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
