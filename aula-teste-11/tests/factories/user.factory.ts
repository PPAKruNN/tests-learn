import prisma from "database";
import { UserInput } from "repository";

export const testUser: UserInput = {
  email: "teste@teste.com.br",
  password: "teste",
};

export async function createTestUser(user: UserInput) {
  return await prisma.user.create({
    data: user,
  });
}
