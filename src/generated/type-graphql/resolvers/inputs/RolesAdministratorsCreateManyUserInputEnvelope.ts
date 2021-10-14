import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCreateManyUserInput } from "../inputs/RolesAdministratorsCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesAdministratorsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateManyUserInput], {
    nullable: false
  })
  data!: RolesAdministratorsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
