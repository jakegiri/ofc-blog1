import * as TypeGraphQL from "type-graphql";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { Catagory } from "../../../models/Catagory";
import { Post } from "../../../models/Post";
import { PostsUsers } from "../../../models/PostsUsers";
import { PostCatagoriesArgs } from "./args/PostCatagoriesArgs";
import { PostUsersArgs } from "./args/PostUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PostsUsers], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostUsersArgs): Promise<PostsUsers[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CatagoriesPosts], {
    nullable: false
  })
  async catagories(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCatagoriesArgs): Promise<CatagoriesPosts[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).catagories(args);
  }

  @TypeGraphQL.FieldResolver(_type => Catagory, {
    nullable: false
  })
  async mainCatagory(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Catagory> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).mainCatagory({});
  }
}
