import { User } from "../entities/User";
import argon2 from "argon2";

export default async function validateLogin(
  user: User | undefined,
  password: string
) {
  if (!user) {
    return {
      errors: [
        {
          field: "usernameOrEmail",
          message: "Username does not exist",
        },
      ],
    };
  }

  const validPassword = await argon2.verify(user.password, password);
  if (!validPassword) {
    return {
      errors: [
        {
          field: "Password",
          message: "Incorrect password",
        },
      ],
    };
  }

  return false;
}
