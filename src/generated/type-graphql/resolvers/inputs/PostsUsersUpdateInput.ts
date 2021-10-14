import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneRequiredWithoutUsersInput } from "../inputs/PostUpdateOneRequiredWithoutUsersInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateInput {
  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPostsInput | undefined;
}
