# NOVA OMNIVERSE AI

A modular JavaScript API prototype for text analysis, explicit agent orchestration,
and illustrative scenario calculations.

## Important project status

Version `0.1.0` is a working software foundation, not a breakthrough AI model.
The current analysis engine uses transparent heuristics. It does not claim to
provide human-level reasoning, scientific discovery, satellite tracking, or
validated predictions. Those capabilities require real data sources, evaluation,
and specialized models.

## Requirements

- Node.js 20+
- npm

## Run locally

```bash
cp .env.example .env
npm install
npm run dev
```

API runs at `http://localhost:3000`.

## Test

```bash
npm test
```

## API endpoints

### Health
`GET /api/v1/health`

### Analyze text
`POST /api/v1/analyze`

```json
{ "text": "Satellite observations can help monitor environmental change." }
```

### Research agent
`POST /api/v1/agents/research`

```json
{
  "task": "Extract an initial overview",
  "input": "Paste source material here."
}
```

### Scenario simulation
`POST /api/v1/simulate`

```json
{
  "name": "Illustrative energy scenario",
  "baseline": 100,
  "changePercent": 12
}
```

This endpoint performs arithmetic only; it is not a real-world forecast.

## Architecture principles

- Keep modules independent and testable.
- Validate all external input.
- Do not expose API keys in frontend code or commit `.env`.
- Add external AI providers only through a server-side adapter.
- Require source citations and evaluation datasets for research outputs.
- Do not describe a prototype capability as production-ready until verified.

## Roadmap

1. Establish API, validation, and automated tests.
2. Add a provider-neutral model adapter and evaluation suite.
3. Add sourced public-data connectors (with attribution and rate-limit handling).
4. Add database persistence and user authentication.
5. Build a web dashboard and deploy a monitored staging environment.
