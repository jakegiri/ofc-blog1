import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsCreateInput } from "../../../inputs/CatagoriesPostsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsCreateInput, {
    nullable: false
  })
  data!: CatagoriesPostsCreateInput;
}
