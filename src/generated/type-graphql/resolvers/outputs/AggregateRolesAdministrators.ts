import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAdministratorsCountAggregate } from "../outputs/RolesAdministratorsCountAggregate";
import { RolesAdministratorsMaxAggregate } from "../outputs/RolesAdministratorsMaxAggregate";
import { RolesAdministratorsMinAggregate } from "../outputs/RolesAdministratorsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRolesAdministrators {
  @TypeGraphQL.Field(_type => RolesAdministratorsCountAggregate, {
    nullable: true
  })
  _count!: RolesAdministratorsCountAggregate | null;

  @TypeGraphQL.Field(_type => RolesAdministratorsMinAggregate, {
    nullable: true
  })
  _min!: RolesAdministratorsMinAggregate | null;

  @TypeGraphQL.Field(_type => RolesAdministratorsMaxAggregate, {
    nullable: true
  })
  _max!: RolesAdministratorsMaxAggregate | null;
}
