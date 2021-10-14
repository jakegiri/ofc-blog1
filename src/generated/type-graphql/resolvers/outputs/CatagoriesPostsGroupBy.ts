import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoriesPostsCountAggregate } from "../outputs/CatagoriesPostsCountAggregate";
import { CatagoriesPostsMaxAggregate } from "../outputs/CatagoriesPostsMaxAggregate";
import { CatagoriesPostsMinAggregate } from "../outputs/CatagoriesPostsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CatagoriesPostsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  catagoryId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => CatagoriesPostsCountAggregate, {
    nullable: true
  })
  _count!: CatagoriesPostsCountAggregate | null;

  @TypeGraphQL.Field(_type => CatagoriesPostsMinAggregate, {
    nullable: true
  })
  _min!: CatagoriesPostsMinAggregate | null;

  @TypeGraphQL.Field(_type => CatagoriesPostsMaxAggregate, {
    nullable: true
  })
  _max!: CatagoriesPostsMaxAggregate | null;
}
