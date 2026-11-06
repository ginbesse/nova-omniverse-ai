export function buildAnalytics(analysis) {
  return {
    wordCount: analysis.metrics.words,
    characterCount: analysis.metrics.characters,
    keywordCount: analysis.keywords.length
  };
}
