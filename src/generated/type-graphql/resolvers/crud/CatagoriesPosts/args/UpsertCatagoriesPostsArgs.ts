import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsCreateInput } from "../../../inputs/CatagoriesPostsCreateInput";
import { CatagoriesPostsUpdateInput } from "../../../inputs/CatagoriesPostsUpdateInput";
import { CatagoriesPostsWhereUniqueInput } from "../../../inputs/CatagoriesPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: false
  })
  where!: CatagoriesPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsCreateInput, {
    nullable: false
  })
  create!: CatagoriesPostsCreateInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateInput, {
    nullable: false
  })
  update!: CatagoriesPostsUpdateInput;
}
