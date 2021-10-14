import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsWhereUniqueInput } from "../../../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;
}
