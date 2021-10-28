import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import {
  Catagory,
  CatagoryCreateInput,
} from "../../shared/generated/type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class CreateCatagoryResolver {
  @Mutation(() => Catagory)
  async createCatagory(
    @Arg("data") data: CatagoryCreateInput,
    @Ctx() ctx: MyContext
  ) {
    return await ctx.prisma.catagory.create({ data });
  }
}
