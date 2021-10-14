import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereInput], {
    nullable: true
  })
  AND?: PostsUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereInput], {
    nullable: true
  })
  OR?: PostsUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUsersScalarWhereInput], {
    nullable: true
  })
  NOT?: PostsUsersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
