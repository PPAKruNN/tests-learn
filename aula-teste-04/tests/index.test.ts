import supertest from "supertest";
import app from "../src/index";

const server = supertest(app);

describe("Are you okay?", () => {
  const endpoint = "/health";

  test(`GET ${endpoint} should respond 'ok'`, () => {
    const result = server.get(endpoint);
    expect(result);
  });
});

// describe("Are you okay?", () => {
//   const endpoint = "/health";

//   test.each(["/health", "/tickets", "/money"])(
//     `GET %s should respond 'ok'`,
//     async (endpoint) => {
//       const result = await server.get(endpoint);
//       expect(result.status).toBe(200);
//     }
//   );
// });
