import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from "../../../shared/generated/type-graphql";
import { PasswordInput } from "../../../shared/PasswordInput";

@InputType()
export class RegisterInputs extends PasswordInput implements Partial<User> {
  @Field()
  @IsNotEmpty()
  firstName!: string;

  @Field()
  @IsNotEmpty()
  lastName!: string;

  @Field()
  @IsNotEmpty()
  email!: string;
}
