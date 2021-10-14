import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CatagoryCountAggregate } from "../outputs/CatagoryCountAggregate";
import { CatagoryMaxAggregate } from "../outputs/CatagoryMaxAggregate";
import { CatagoryMinAggregate } from "../outputs/CatagoryMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCatagory {
  @TypeGraphQL.Field(_type => CatagoryCountAggregate, {
    nullable: true
  })
  _count!: CatagoryCountAggregate | null;

  @TypeGraphQL.Field(_type => CatagoryMinAggregate, {
    nullable: true
  })
  _min!: CatagoryMinAggregate | null;

  @TypeGraphQL.Field(_type => CatagoryMaxAggregate, {
    nullable: true
  })
  _max!: CatagoryMaxAggregate | null;
}
