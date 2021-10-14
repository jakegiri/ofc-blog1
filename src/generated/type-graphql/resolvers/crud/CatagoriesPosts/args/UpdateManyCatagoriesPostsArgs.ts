import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsUpdateManyMutationInput } from "../../../inputs/CatagoriesPostsUpdateManyMutationInput";
import { CatagoriesPostsWhereInput } from "../../../inputs/CatagoriesPostsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CatagoriesPostsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  where?: CatagoriesPostsWhereInput | undefined;
}
