import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CatagoryCreateManyInput } from "../../../inputs/CatagoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCatagoryArgs {
  @TypeGraphQL.Field(_type => [CatagoryCreateManyInput], {
    nullable: false
  })
  data!: CatagoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
