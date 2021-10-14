import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesAdministratorsCreateManyInput } from "../../../inputs/RolesAdministratorsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRolesAdministratorsArgs {
  @TypeGraphQL.Field(_type => [RolesAdministratorsCreateManyInput], {
    nullable: false
  })
  data!: RolesAdministratorsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
