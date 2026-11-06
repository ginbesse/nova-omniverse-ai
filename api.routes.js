import { Router } from "express";
import { z } from "zod";
import { analyzeText } from "../modules/intelligence/intelligence.service.js";
import { runResearchAgent } from "../modules/agents/agent.service.js";
import { buildAnalytics } from "../modules/analytics/analytics.service.js";
import { simulateScenario } from "../modules/simulation/simulation.service.js";

export const apiRouter = Router();

const textSchema = z.object({
  text: z.string().trim().min(1).max(20_000)
});

const agentSchema = z.object({
  task: z.string().trim().min(1).max(200),
  input: z.string().trim().min(1).max(20_000)
});

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "nova-omniverse-ai", version: "0.1.0" });
});

apiRouter.post("/analyze", (req, res, next) => {
  try {
    const { text } = textSchema.parse(req.body);
    const analysis = analyzeText(text);
    res.json({ success: true, data: analysis, analytics: buildAnalytics(analysis) });
  } catch (error) {
    next(error);
  }
});

apiRouter.post("/agents/research", async (req, res, next) => {
  try {
    const payload = agentSchema.parse(req.body);
    res.json({ success: true, data: await runResearchAgent(payload) });
  } catch (error) {
    next(error);
  }
});

apiRouter.post("/simulate", (req, res, next) => {
  try {
    res.json({ success: true, data: simulateScenario(req.body) });
  } catch (error) {
    next(error);
  }
});
