import { ArgsType, Field, Int } from "type-graphql";
import {
  PostOrderByWithRelationInput,
  PostScalarFieldEnum,
  PostWhereInput,
  PostWhereUniqueInput,
} from "../../../shared/generated/type-graphql";

@ArgsType()
export class CountPostsArgs {
  @Field((__type) => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @Field((__type) => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @Field((__type) => Int, { nullable: true })
  limit?: number | undefined;

  @Field((__type) => Int, { nullable: true })
  offset?: number | undefined;

  @Field((__type) => [PostOrderByWithRelationInput], { nullable: true })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @Field((__type) => [PostScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "title"
        | "description"
        | "content"
        | "createdAt"
        | "modifiedAt"
        | "deletedAt"
      >
    | undefined;
}
