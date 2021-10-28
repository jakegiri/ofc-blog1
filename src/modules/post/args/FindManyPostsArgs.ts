import * as TypeGraphQL from "type-graphql";
import {
  PostOrderByWithRelationInput,
  PostScalarFieldEnum,
  PostWhereInput,
  PostWhereUniqueInput,
} from "../../../shared/generated/type-graphql";

@TypeGraphQL.ArgsType()
export class FindManyPostArgs {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [PostOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  limit?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  offset?: number | undefined;

  @TypeGraphQL.Field((_type) => [PostScalarFieldEnum], {
    nullable: true,
  })
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
