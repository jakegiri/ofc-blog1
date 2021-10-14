import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsWhereInput } from "../../../inputs/CatagoriesPostsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  where?: CatagoriesPostsWhereInput | undefined;
}
