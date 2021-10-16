import { Query, Resolver } from "type-graphql";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async register() {
    return "Hello this is hello executed";
  }
}
