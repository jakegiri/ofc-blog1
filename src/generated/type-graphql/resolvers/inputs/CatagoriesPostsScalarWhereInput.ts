import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CatagoriesPostsScalarWhereInput {
  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereInput], {
    nullable: true
  })
  AND?: CatagoriesPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereInput], {
    nullable: true
  })
  OR?: CatagoriesPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CatagoriesPostsScalarWhereInput], {
    nullable: true
  })
  NOT?: CatagoriesPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  catagoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;
}
