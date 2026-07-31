import { products } from '../data/products';

// Extended category mappings for smart recommendations
const smartKeywords = {
  'jute': ['jute', 'burlap', 'hessian', 'sacks', 'twine', 'cord'],
  'pp': ['pp', 'polypropylene', 'woven', 'bopp', 'unprinted'],
  'paper': ['paper', 'shopping', 'retail'],
  'fibc': ['fibc', 'bulk', 'baffle', 'jumbo'],
  'agriculture': ['net', 'silage', 'crop', 'ground', 'shade', 'hail', 'trellis', 'soil'],
  'rice': ['pp-woven', 'unprinted', 'bopp', 'sack'],
  'cement': ['pp-woven', 'baffle', 'sack'],
  'fertilizer': ['pp-woven', 'liner', 'sack'],
  'shopping': ['retail', 'paper', 'jute-shopping', 'cotton'],
  'export': ['fibc', 'baffle', 'liner', 'bulk'],
  'food': ['bopp', 'cooler', 'cotton']
};

/**
 * Searches for products based on a query. Supports partial matching.
 */
export const searchProducts = (query) => {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  const tokens = lowerQuery.split(/\s+/).filter(token => token.length > 1);

  if (tokens.length === 0) return [];

  const results = products.filter(product => {
    const title = product.title.toLowerCase();
    const slug = product.slug.toLowerCase();
    const description = (product.description || "").toLowerCase();
    
    // Direct or partial match
    if (title.includes(lowerQuery) || slug.includes(lowerQuery)) return true;

    // Token match
    const tokenMatch = tokens.some(token => title.includes(token) || slug.includes(token) || description.includes(token));
    if (tokenMatch) return true;

    // Smart Keyword match
    for (const [category, keywords] of Object.entries(smartKeywords)) {
      if (tokens.some(t => category.includes(t) || t.includes(category))) {
        if (keywords.some(k => title.includes(k) || slug.includes(k))) return true;
      }
    }
    return false;
  });

  return Array.from(new Set(results)).slice(0, 5);
};

/**
 * Get quick search suggestions (for autocomplete)
 */
export const getSearchSuggestions = (query) => {
  if (!query || query.length < 2) return [];
  const lowerQuery = query.toLowerCase().trim();
  
  const matches = products
    .filter(p => p.title.toLowerCase().includes(lowerQuery))
    .map(p => p.title);
    
  return Array.from(new Set(matches)).slice(0, 4);
};

/**
 * Recommends 3 products based on context.
 */
export const getRecommendations = (context = '') => {
  const lowerContext = context.toLowerCase();
  let matches = [];

  for (const [category, keywords] of Object.entries(smartKeywords)) {
    if (lowerContext.includes(category)) {
      const found = products.filter(p => keywords.some(k => p.title.toLowerCase().includes(k) || p.slug.toLowerCase().includes(k)));
      matches = [...matches, ...found];
    }
  }

  // Fallback if no smart keywords matched
  if (matches.length === 0) {
    const fallbackSlugs = ['jute-sacks', 'pp-woven-sacks-a', 'baffle-bags', 'paper-bags'];
    matches = products.filter(p => fallbackSlugs.includes(p.slug));
  }

  // Return exactly 3 unique products
  return Array.from(new Set(matches)).slice(0, 3);
};
