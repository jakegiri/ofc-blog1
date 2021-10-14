import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCatagoriesInput } from "../inputs/PostCreateOrConnectWithoutCatagoriesInput";
import { PostCreateWithoutCatagoriesInput } from "../inputs/PostCreateWithoutCatagoriesInput";
import { PostUpdateWithoutCatagoriesInput } from "../inputs/PostUpdateWithoutCatagoriesInput";
import { PostUpsertWithoutCatagoriesInput } from "../inputs/PostUpsertWithoutCatagoriesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutCatagoriesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCatagoriesInput, {
    nullable: true
  })
  create?: PostCreateWithoutCatagoriesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCatagoriesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCatagoriesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCatagoriesInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutCatagoriesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCatagoriesInput, {
    nullable: true
  })
  update?: PostUpdateWithoutCatagoriesInput | undefined;
}
