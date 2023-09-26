import prisma from "../../src/database";
import { UserInput } from "../../src/repository";
import { fakerPT_BR } from "@faker-js/faker";

export async function buildUser() {
  const userData: UserInput = {
    email: fakerPT_BR.internet.email(),
    password: fakerPT_BR.internet.password() || new Date().getTime().toString(),
  };

  const user = await prisma.user.create({ data: userData });
  return user;
}
