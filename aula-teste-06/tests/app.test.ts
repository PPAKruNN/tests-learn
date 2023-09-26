import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  test("check if object return in correct format", async () => {
    const response = await api.get("/event");
    const data = response.body;

    expect(data).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String),
    });
  });
});
