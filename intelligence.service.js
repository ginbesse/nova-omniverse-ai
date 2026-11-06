/**
 * Baseline analysis engine.
 * This is a transparent, deterministic MVP—not a generative AI model.
 * A verified model provider can be added behind this service interface later.
 */
export function analyzeText(input) {
  const text = input.trim();
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter((part) => part.trim());

  const keywords = [...new Set(
    words
      .map((word) => word.toLowerCase().replace(/[^\p{L}\p{N}-]/gu, ""))
      .filter((word) => word.length >= 5)
  )].slice(0, 8);

  return {
    summary: `Received ${words.length} words across ${sentences.length} sentence(s).`,
    metrics: {
      characters: text.length,
      words: words.length,
      sentences: sentences.length
    },
    keywords,
    method: "baseline-statistical",
    limitations: [
      "This prototype does not understand meaning like a language model.",
      "Keyword extraction is frequency-independent and heuristic."
    ]
  };
}
