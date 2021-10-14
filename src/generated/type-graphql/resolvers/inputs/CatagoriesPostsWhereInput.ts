import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryRelationFilter } from "../inputs/CatagoryRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsWhereInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereInput], {
    nullable: true
  })
  AND?: CatagoriesPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereInput], {
    nullable: true
  })
  OR?: CatagoriesPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsWhereInput], {
    nullable: true
  })
  NOT?: CatagoriesPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => CatagoryRelationFilter, {
    nullable: true
  })
  catagory?: CatagoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  catagoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;
}
