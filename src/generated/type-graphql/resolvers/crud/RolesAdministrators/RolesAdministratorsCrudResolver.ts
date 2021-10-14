import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesAdministratorsArgs } from "./args/AggregateRolesAdministratorsArgs";
import { CreateManyRolesAdministratorsArgs } from "./args/CreateManyRolesAdministratorsArgs";
import { CreateRolesAdministratorsArgs } from "./args/CreateRolesAdministratorsArgs";
import { DeleteManyRolesAdministratorsArgs } from "./args/DeleteManyRolesAdministratorsArgs";
import { DeleteRolesAdministratorsArgs } from "./args/DeleteRolesAdministratorsArgs";
import { FindFirstRolesAdministratorsArgs } from "./args/FindFirstRolesAdministratorsArgs";
import { FindManyRolesAdministratorsArgs } from "./args/FindManyRolesAdministratorsArgs";
import { FindUniqueRolesAdministratorsArgs } from "./args/FindUniqueRolesAdministratorsArgs";
import { GroupByRolesAdministratorsArgs } from "./args/GroupByRolesAdministratorsArgs";
import { UpdateManyRolesAdministratorsArgs } from "./args/UpdateManyRolesAdministratorsArgs";
import { UpdateRolesAdministratorsArgs } from "./args/UpdateRolesAdministratorsArgs";
import { UpsertRolesAdministratorsArgs } from "./args/UpsertRolesAdministratorsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { RolesAdministrators } from "../../../models/RolesAdministrators";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRolesAdministrators } from "../../outputs/AggregateRolesAdministrators";
import { RolesAdministratorsGroupBy } from "../../outputs/RolesAdministratorsGroupBy";

@TypeGraphQL.Resolver(_of => RolesAdministrators)
export class RolesAdministratorsCrudResolver {
  @TypeGraphQL.Query(_returns => RolesAdministrators, {
    nullable: true
  })
  async findUniqueRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => RolesAdministrators, {
    nullable: true
  })
  async findFirstRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [RolesAdministrators], {
    nullable: false
  })
  async findManyRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRolesAdministratorsArgs): Promise<RolesAdministrators[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: false
  })
  async createRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateRolesAdministratorsArgs): Promise<RolesAdministrators> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyRolesAdministratorsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: true
  })
  async deleteRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: true
  })
  async updateRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateRolesAdministratorsArgs): Promise<RolesAdministrators | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyRolesAdministratorsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyRolesAdministratorsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => RolesAdministrators, {
    nullable: false
  })
  async upsertRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertRolesAdministratorsArgs): Promise<RolesAdministrators> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateRolesAdministrators, {
    nullable: false
  })
  async aggregateRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRolesAdministratorsArgs): Promise<AggregateRolesAdministrators> {
    return getPrismaFromContext(ctx).rolesAdministrators.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [RolesAdministratorsGroupBy], {
    nullable: false
  })
  async groupByRolesAdministrators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRolesAdministratorsArgs): Promise<RolesAdministratorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).rolesAdministrators.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
