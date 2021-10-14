import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneRequiredWithoutUsersInput } from "../inputs/PostUpdateOneRequiredWithoutUsersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostsUsersUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutUsersInput | undefined;
}
