import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CatagoriesPosts } from "../models/CatagoriesPosts";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Catagory {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  mainCatagoryPosts?: Post[];

  posts?: CatagoriesPosts[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | null;
}
