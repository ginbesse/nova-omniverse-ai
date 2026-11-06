import { z } from "zod";

const scenarioSchema = z.object({
  name: z.string().min(1).max(80),
  baseline: z.number().finite(),
  changePercent: z.number().finite().min(-100).max(100)
});

export function simulateScenario(rawScenario) {
  const scenario = scenarioSchema.parse(rawScenario);
  const projected = scenario.baseline * (1 + scenario.changePercent / 100);

  return {
    name: scenario.name,
    baseline: scenario.baseline,
    changePercent: scenario.changePercent,
    projected: Number(projected.toFixed(4)),
    note: "Illustrative mathematical scenario, not a forecast."
  };
}
