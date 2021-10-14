import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCatagoryArgs } from "./args/AggregateCatagoryArgs";
import { Catagory } from "../../../models/Catagory";
import { AggregateCatagory } from "../../outputs/AggregateCatagory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Catagory)
export class AggregateCatagoryResolver {
  @TypeGraphQL.Query(_returns => AggregateCatagory, {
    nullable: false
  })
  async aggregateCatagory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCatagoryArgs): Promise<AggregateCatagory> {
    return getPrismaFromContext(ctx).catagory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
