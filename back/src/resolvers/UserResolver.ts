import argon2 from "argon2";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { Context } from "../types";
import validateLogin from "../utils/validateLogin";
import { validateRegister } from "../utils/validateRegister";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import UserResponse from "./UserResponse";

//make sure you can create users
//test with a query that returns user
//then add session with redis

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }
    const hashedPassword = await argon2.hash(options.password);
    var user;
    try {
      user = await User.create({
        username: options.username.toLowerCase(),
        password: hashedPassword,
        email: options.email.toLowerCase(),
      }).save();
    } catch (err) {
      if (err.code === "23505" || err.detail.includes("already exists")) {
        return {
          errors: [
            {
              field: "username",
              message: "This user name was already taken.",
            },
          ],
        };
      }
    }

    req.session.userId = (user as User).id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    let user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail.toLowerCase() } }
    );

    const errors = await validateLogin(user, password);

    if (errors) {
      return errors;
    } else {
      user = user as User;
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() { req }: Context) {
    //not logged in
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }

  @Query(() => [User], { nullable: true })
  async allUser() {
    return User.find({});
  }
}
