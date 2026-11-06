import { ZodError } from "zod";

export function errorHandler(error, _req, res, _next) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: "Invalid request",
      details: error.issues.map(({ path, message }) => ({ path, message }))
    });
  }

  console.error(error);
  return res.status(500).json({
    success: false,
    error: "Internal server error"
  });
}
