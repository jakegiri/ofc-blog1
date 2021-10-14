import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CatagoriesPosts } from "../models/CatagoriesPosts";
import { Catagory } from "../models/Catagory";
import { PostsUsers } from "../models/PostsUsers";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  users?: PostsUsers[];

  catagories?: CatagoriesPosts[];

  mainCatagory?: Catagory;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mainCatagoryId!: string;
}
