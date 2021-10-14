import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsUpdateInput } from "../../../inputs/CatagoriesPostsUpdateInput";
import { CatagoriesPostsWhereUniqueInput } from "../../../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateInput, {
    nullable: false
  })
  data!: CatagoriesPostsUpdateInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;
}
