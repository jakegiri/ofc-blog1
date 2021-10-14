import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoriesPostsOrderByInput } from "../../../inputs/CatagoriesPostsOrderByInput";
import { CatagoriesPostsWhereInput } from "../../../inputs/CatagoriesPostsWhereInput";
import { CatagoriesPostsWhereUniqueInput } from "../../../inputs/CatagoriesPostsWhereUniqueInput";
import { CatagoriesPostsScalarFieldEnum } from "../../../../enums/CatagoriesPostsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCatagoriesPostsArgs {
  @TypeGraphQL.Field(_type => CatagoriesPostsWhereInput, {
    nullable: true
  })
  where?: CatagoriesPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsOrderByInput], {
    nullable: true
  })
  orderBy?: CatagoriesPostsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoriesPostsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CatagoriesPostsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"catagoryId" | "postId"> | undefined;
}
