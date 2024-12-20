const app = require("./server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("API Endpoint Tests", () => {
 it("Call the /coding endpoint", async () => {
  const res = await request.get("/coding");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello, coding!");
});
  it("Call the /youtube endpoint", async () => {
    const res = await request.get("/youtube");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello, youtube indonesia!");
  });

  it("Call the / endpoint", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("This App is running properly!");
  });

  it("Call the /ping endpoint", async () => {
    const res = await request.get("/ping");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Pong!");
  });

  it("Call the /hello/:name endpoint", async () => {
    const res = await request.get("/hello/Iqbal");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello Iqbal");
  });
});
