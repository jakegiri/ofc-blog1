import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersWhereInput } from "../inputs/PostsUsersWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersListRelationFilter {
  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  every?: PostsUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  some?: PostsUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostsUsersWhereInput, {
    nullable: true
  })
  none?: PostsUsersWhereInput | undefined;
}
