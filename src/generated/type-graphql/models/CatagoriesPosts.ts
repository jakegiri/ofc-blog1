import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Catagory } from "../models/Catagory";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CatagoriesPosts {
  catagory?: Catagory;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  catagoryId!: string;

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;
}
