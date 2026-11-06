import express from "express";
import cors from "cors";
import { env } from "./config/environment.js";
import { apiRouter } from "./routes/api.routes.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();

app.disable("x-powered-by");
app.use(cors({ origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN }));
app.use(express.json({ limit: "256kb" }));

app.get("/", (_req, res) => {
  res.json({
    name: "NOVA OMNIVERSE AI",
    version: "0.1.0",
    description: "Modular intelligence and scenario-analysis API",
    docs: "See README.md for available endpoints"
  });
});

app.use("/api/v1", apiRouter);
app.use(errorHandler);
