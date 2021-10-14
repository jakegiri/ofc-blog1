import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCatagoriesPostsArgs } from "./args/AggregateCatagoriesPostsArgs";
import { CreateCatagoriesPostsArgs } from "./args/CreateCatagoriesPostsArgs";
import { CreateManyCatagoriesPostsArgs } from "./args/CreateManyCatagoriesPostsArgs";
import { DeleteCatagoriesPostsArgs } from "./args/DeleteCatagoriesPostsArgs";
import { DeleteManyCatagoriesPostsArgs } from "./args/DeleteManyCatagoriesPostsArgs";
import { FindFirstCatagoriesPostsArgs } from "./args/FindFirstCatagoriesPostsArgs";
import { FindManyCatagoriesPostsArgs } from "./args/FindManyCatagoriesPostsArgs";
import { FindUniqueCatagoriesPostsArgs } from "./args/FindUniqueCatagoriesPostsArgs";
import { GroupByCatagoriesPostsArgs } from "./args/GroupByCatagoriesPostsArgs";
import { UpdateCatagoriesPostsArgs } from "./args/UpdateCatagoriesPostsArgs";
import { UpdateManyCatagoriesPostsArgs } from "./args/UpdateManyCatagoriesPostsArgs";
import { UpsertCatagoriesPostsArgs } from "./args/UpsertCatagoriesPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CatagoriesPosts } from "../../../models/CatagoriesPosts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCatagoriesPosts } from "../../outputs/AggregateCatagoriesPosts";
import { CatagoriesPostsGroupBy } from "../../outputs/CatagoriesPostsGroupBy";

@TypeGraphQL.Resolver(_of => CatagoriesPosts)
export class CatagoriesPostsCrudResolver {
  @TypeGraphQL.Query(_returns => CatagoriesPosts, {
    nullable: true
  })
  async findUniqueCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCatagoriesPostsArgs): Promise<CatagoriesPosts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CatagoriesPosts, {
    nullable: true
  })
  async findFirstCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCatagoriesPostsArgs): Promise<CatagoriesPosts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CatagoriesPosts], {
    nullable: false
  })
  async findManyCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCatagoriesPostsArgs): Promise<CatagoriesPosts[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CatagoriesPosts, {
    nullable: false
  })
  async createCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCatagoriesPostsArgs): Promise<CatagoriesPosts> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCatagoriesPostsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CatagoriesPosts, {
    nullable: true
  })
  async deleteCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCatagoriesPostsArgs): Promise<CatagoriesPosts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CatagoriesPosts, {
    nullable: true
  })
  async updateCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCatagoriesPostsArgs): Promise<CatagoriesPosts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCatagoriesPostsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCatagoriesPostsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CatagoriesPosts, {
    nullable: false
  })
  async upsertCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCatagoriesPostsArgs): Promise<CatagoriesPosts> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCatagoriesPosts, {
    nullable: false
  })
  async aggregateCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCatagoriesPostsArgs): Promise<AggregateCatagoriesPosts> {
    return getPrismaFromContext(ctx).catagoriesPosts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CatagoriesPostsGroupBy], {
    nullable: false
  })
  async groupByCatagoriesPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCatagoriesPostsArgs): Promise<CatagoriesPostsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catagoriesPosts.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
