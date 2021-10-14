import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUsersCountAggregate } from "../outputs/PostsUsersCountAggregate";
import { PostsUsersMaxAggregate } from "../outputs/PostsUsersMaxAggregate";
import { PostsUsersMinAggregate } from "../outputs/PostsUsersMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostsUsersGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => PostsUsersCountAggregate, {
    nullable: true
  })
  _count!: PostsUsersCountAggregate | null;

  @TypeGraphQL.Field(_type => PostsUsersMinAggregate, {
    nullable: true
  })
  _min!: PostsUsersMinAggregate | null;

  @TypeGraphQL.Field(_type => PostsUsersMaxAggregate, {
    nullable: true
  })
  _max!: PostsUsersMaxAggregate | null;
}
