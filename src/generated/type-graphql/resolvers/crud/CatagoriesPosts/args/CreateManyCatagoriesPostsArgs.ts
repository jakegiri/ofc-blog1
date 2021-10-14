import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsCreateManyInput } from "../../../inputs/CatagoriesPostsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => [CatagoriesPostsCreateManyInput], {
    nullable: false
  })
  data!: CatagoriesPostsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
