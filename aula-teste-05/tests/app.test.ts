import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });

  test.each([
    [3, [0, 1, 1]],
    [4, [0, 1, 1, 2]],
    [6, [0, 1, 1, 2, 3, 5]],
  ])("should return 200 when ask /fibonacci element '%i'", async (el, resp) => {
    const { status, text } = await api.get(`/fibonacci?elements=${el}`);
    expect(status).toBe(200);
    expect(JSON.parse(text)).toEqual(resp);
  });
});
