import * as TypeGraphQL from "type-graphql";
import { PostsUsers } from "../../../models/PostsUsers";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserRolesArgs } from "./args/UserRolesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PostsUsers], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<PostsUsers[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [RolesAdministrators], {
    nullable: false
  })
  async roles(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRolesArgs): Promise<RolesAdministrators[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).roles(args);
  }
}
