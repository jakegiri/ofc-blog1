import * as TypeGraphQL from "type-graphql";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { Catagory } from "../../../models/Catagory";
import { Post } from "../../../models/Post";
import { CatagoryMainCatagoryPostsArgs } from "./args/CatagoryMainCatagoryPostsArgs";
import { CatagoryPostsArgs } from "./args/CatagoryPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Catagory)
export class CatagoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async mainCatagoryPosts(@TypeGraphQL.Root() catagory: Catagory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CatagoryMainCatagoryPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).catagory.findUnique({
      where: {
        id: catagory.id,
      },
    }).mainCatagoryPosts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CatagoriesPosts], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() catagory: Catagory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CatagoryPostsArgs): Promise<CatagoriesPosts[]> {
    return getPrismaFromContext(ctx).catagory.findUnique({
      where: {
        id: catagory.id,
      },
    }).posts(args);
  }
}
