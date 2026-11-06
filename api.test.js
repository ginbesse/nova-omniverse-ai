import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("NOVA OMNIVERSE API", () => {
  it("reports healthy status", async () => {
    const response = await request(app).get("/api/v1/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("analyzes submitted text", async () => {
    const response = await request(app)
      .post("/api/v1/analyze")
      .send({ text: "Satellite systems collect valuable climate data." });

    expect(response.status).toBe(200);
    expect(response.body.data.metrics.words).toBe(7);
  });

  it("rejects empty text", async () => {
    const response = await request(app)
      .post("/api/v1/analyze")
      .send({ text: " " });

    expect(response.status).toBe(400);
  });

  it("calculates an illustrative scenario", async () => {
    const response = await request(app)
      .post("/api/v1/simulate")
      .send({ name: "Demo", baseline: 100, changePercent: 10 });

    expect(response.status).toBe(200);
    expect(response.body.data.projected).toBe(110);
  });
});
