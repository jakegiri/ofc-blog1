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
export class AggregatePostsUsers {
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
