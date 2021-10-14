import * as TypeGraphQL from "type-graphql";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { Catagory } from "../../../models/Catagory";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CatagoriesPosts)
export class CatagoriesPostsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Catagory, {
    nullable: false
  })
  async catagory(@TypeGraphQL.Root() catagoriesPosts: CatagoriesPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Catagory> {
    return getPrismaFromContext(ctx).catagoriesPosts.findUnique({
      where: {
        catagoryId_postId: {
          catagoryId: catagoriesPosts.catagoryId,
          postId: catagoriesPosts.postId,
        },
      },
    }).catagory({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() catagoriesPosts: CatagoriesPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).catagoriesPosts.findUnique({
      where: {
        catagoryId_postId: {
          catagoryId: catagoriesPosts.catagoryId,
          postId: catagoriesPosts.postId,
        },
      },
    }).post({});
  }
}
