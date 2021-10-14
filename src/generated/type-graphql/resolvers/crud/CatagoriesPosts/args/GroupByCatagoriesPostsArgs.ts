import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsOrderByInput } from "../../../inputs/CatagoriesPostsOrderByInput";
import { CatagoriesPostsScalarWhereWithAggregatesInput } from "../../../inputs/CatagoriesPostsScalarWhereWithAggregatesInput";
import { CatagoriesPostsWhereInput } from "../../../inputs/CatagoriesPostsWhereInput";
import { CatagoriesPostsScalarFieldEnum } from "../../../../enums/CatagoriesPostsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  where?: CatagoriesPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsOrderByInput], {
    nullable: true
  })
  orderBy?: CatagoriesPostsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"catagoryId" | "postId">;

  @TypeGraphQL.Field(_type => CatagoriesPostsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CatagoriesPostsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
