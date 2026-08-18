import { faqData } from '../data/faq';
import { intents } from '../data/intents';
import { searchProducts, getRecommendations } from './productSearch';

// ─── Utility: strip emoji/unicode symbols before comparing ───────────────────
const stripEmoji = (str) =>
  str
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
    .replace(/[\u{2600}-\u{27BF}]/gu, '')
    .replace(/[\u{FE00}-\u{FEFF}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

// ─── Utility: check if string contains any of the given keywords ─────────────
const hasAny = (str, keywords) => keywords.some(k => str.includes(k));

// ─── Main entry point ────────────────────────────────────────────────────────
export const processMessage = (message) => {
  const raw = message.toLowerCase().trim();
  const clean = stripEmoji(raw);           // emoji-free version
  const text = clean.replace(/[^a-z0-9\s&]/g, ' ').replace(/\s+/g, ' ').trim(); // alphanumeric only

  // ── 1. GREETINGS ──────────────────────────────────────────────────────────
  const greetWords = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy'];
  if (greetWords.some(g => text === g || text.startsWith(g + ' '))) {
    return {
      type: 'text',
      text: "👋 Hello! Welcome to BulkFlex Packaging.\n\nI can help you with:\n• Finding the right packaging products\n• Shipping & export information\n• MOQ & pricing guidance\n• Custom printing options\n• Sample requests\n\nHow can I assist you today?",
      quickReplies: ["Browse Products", "Shipping", "MOQ", "WhatsApp", "Contact Sales"]
    };
  }

  // ── 2. QUICK REPLY BUTTON HANDLERS (emoji-stripped exact & includes match) ─
  // Browse Products / Find Products
  if (hasAny(text, ['browse products', 'find products', 'show products', 'view products', 'all products'])) {
    return {
      type: 'text',
      text: "What type of packaging are you looking for?\n\nSearch by material or application:\n• Jute & Burlap — natural, biodegradable\n• PP Woven — durable industrial sacks\n• BOPP — full-colour printed bags\n• FIBC / Jumbo Bags — bulk containers\n• Agro Textiles — nets, covers, wraps\n• Paper Bags — retail & food grade",
      quickReplies: ["Jute Bags", "PP Woven Bags", "BOPP Bags", "FIBC Bags", "Paper Bags", "Categories"]
    };
  }

  // Categories
  if (text === 'categories' || hasAny(text, ['show categories', 'all categories', 'product categories', 'types of packaging'])) {
    return {
      type: 'text',
      text: "📂 BulkFlex Product Categories:\n\n1️⃣ FIBC / Jumbo Bulk Bags\n2️⃣ Jute & Burlap Bags & Fabric\n3️⃣ PP Woven & BOPP Sacks\n4️⃣ Paper Bags (Kraft & Multiwall)\n5️⃣ Agro Textiles (Nets, Covers, Wraps)\n6️⃣ Cotton & rPET Bags\n7️⃣ Specialty Fabrics & Liners\n\nWhich category would you like to explore?",
      quickReplies: ["FIBC Bags", "Jute Bags", "PP Woven Bags", "Paper Bags", "Agro Textiles"]
    };
  }

  // Industries
  if (text === 'industries' || hasAny(text, ['which industries', 'who uses', 'sectors', 'industry', 'applications', 'use cases'])) {
    return {
      type: 'text',
      text: "🏭 BulkFlex serves global industries:\n\n• 🌾 Agriculture — rice, grains, seeds, fertilizer\n• 🏗 Construction — cement, sand, stone\n• 🧴 Chemicals & Pharma — safe industrial bags\n• 🛒 Retail & E-Commerce — branded bags\n• 🌿 Horticulture — nets, crop covers\n• ♻️ Sustainable Packaging — rPET, jute, cotton\n• 🍚 Food & FMCG — food-grade certified bags",
      quickReplies: ["Browse Products", "Custom Printing", "Contact Sales"]
    };
  }

  // Custom Printing
  if (text === 'custom printing' || hasAny(text, ['custom print', 'print options', 'logo printing', 'branded bags', 'printing options'])) {
    return {
      type: 'text',
      text: faqData.custom_printing.content,
      quickReplies: faqData.custom_printing.quickReplies
    };
  }

  // MOQ
  if (text === 'moq' || hasAny(text, ['minimum order', 'min order', 'how many minimum', 'smallest order', 'minimum qty', 'minimum quantity'])) {
    return {
      type: 'text',
      text: faqData.moq.content,
      quickReplies: faqData.moq.quickReplies
    };
  }

  // Shipping
  if (text === 'shipping' || hasAny(text, ['delivery time', 'how long delivery', 'shipping info', 'how do you ship', 'export', 'freight quote', 'shipping cost', 'lead time'])) {
    return {
      type: 'text',
      text: faqData.shipping.content,
      quickReplies: faqData.shipping.quickReplies
    };
  }

  // Samples
  if (text === 'samples' || text === 'request sample' || hasAny(text, ['get sample', 'order sample', 'free sample', 'sample request', 'can i get a sample'])) {
    return {
      type: 'text',
      text: faqData.samples.content,
      quickReplies: faqData.samples.quickReplies
    };
  }

  // WhatsApp Redirect
  if (text === 'whatsapp' || hasAny(text, ['whats app', 'chat on whatsapp', 'whatsapp chat', 'message on whatsapp'])) {
    return {
      type: 'text',
      text: "🟢 Redirecting you to WhatsApp (+91 98983 98989)...",
      redirectUrl: "https://wa.me/919898398989",
      quickReplies: ["Contact Sales", "Browse Products"]
    };
  }

  // Contact
  if (text === 'contact sales' || text === 'contact' || hasAny(text, ['get in touch', 'speak to someone', 'talk to sales', 'reach you', 'how to contact', 'your email', 'your phone'])) {
    return {
      type: 'text',
      text: faqData.contact.content,
      quickReplies: faqData.contact.quickReplies
    };
  }

  // Best Sellers / Popular
  if (text === 'best sellers' || hasAny(text, ['popular products', 'top products', 'most ordered', 'trending', 'recommended'])) {
    const topProducts = getRecommendations('fibc jute pp woven');
    return {
      type: 'products',
      text: "⭐ Our most popular packaging products:",
      products: topProducts,
      quickReplies: ["Custom Printing", "Contact Sales", "Shipping"]
    };
  }

  // ── 3. PRODUCT CATEGORY QUICK SEARCHES ───────────────────────────────────
  const categoryMap = [
    { keys: ['bopp bags', 'bopp sacks', 'bopp', 'printed sacks', 'laminated bags'], query: 'bopp', label: 'BOPP Bags' },
    { keys: ['fibc bags', 'fibc', 'jumbo bags', 'jumbo bag', 'bulk bag', 'bulk container'], query: 'fibc', label: 'FIBC / Jumbo Bags' },
    { keys: ['jute bags', 'jute bag', 'jute', 'burlap bags', 'burlap', 'hessian'], query: 'jute burlap', label: 'Jute & Burlap Bags' },
    { keys: ['pp woven bags', 'pp woven', 'pp bags', 'woven sacks', 'polypropylene bags'], query: 'pp woven', label: 'PP Woven Bags' },
    { keys: ['paper bags', 'kraft bags', 'multiwall bags', 'paper sacks'], query: 'paper', label: 'Paper Bags' },
    { keys: ['agro textiles', 'agriculture nets', 'crop covers', 'shade nets', 'silage', 'hail nets', 'trellis', 'agro'], query: 'net crop silage shade', label: 'Agro Textiles' },
    { keys: ['cotton bags', 'cotton', 'reusable bags'], query: 'cotton', label: 'Cotton Bags' },
    { keys: ['rpet bags', 'rpet', 'recycled bags', 'sustainable bags', 'eco bags'], query: 'rpet', label: 'rPET / Eco Bags' },
    { keys: ['leno bags', 'leno', 'raschel'], query: 'leno raschel', label: 'Leno / Raschel Bags' },
    { keys: ['container liner', 'pe liner', 'liner', 'liners'], query: 'liner', label: 'Container Liners' },
  ];

  for (const cat of categoryMap) {
    if (cat.keys.some(k => text === k || new RegExp(`\\b${k}\\b`, 'i').test(text))) {
      const results = searchProducts(cat.query);
      if (results.length > 0) {
        return {
          type: 'products',
          text: `Here are our ${cat.label} options:`,
          products: results,
          quickReplies: ["Custom Printing", "MOQ", "Contact Sales"]
        };
      }
    }
  }

  // ── 4. PRODUCT SEARCH (natural language queries) ──────────────────────────
  const searchPrefixes = ['find', 'search', 'looking for', 'need', 'show me', 'do you have', 'i want', 'i need', 'give me', 'any'];
  const isSearch = searchPrefixes.some(p => text.startsWith(p));
  const hasProductWords = hasAny(text, ['bag', 'sack', 'fabric', 'net', 'wrap', 'cover', 'liner', 'packaging']);

  if (isSearch || hasProductWords) {
    let query = text;
    searchPrefixes.forEach(p => { query = query.replace(p, '').trim(); });
    const results = searchProducts(query || text);

    if (results.length > 0) {
      return {
        type: 'products',
        text: `I found these products matching "${query || text}":`,
        products: results,
        quickReplies: ["MOQ", "Custom Printing", "Contact Sales"]
      };
    } else {
      const recs = getRecommendations(text);
      return {
        type: 'products',
        text: `I couldn't find an exact match for "${query || text}".\n\nHere are some popular options you might like:`,
        products: recs,
        quickReplies: ["Browse Products", "Categories", "Contact Sales"]
      };
    }
  }

  // ── 5. INTENT MATCHING (FAQ keywords) ────────────────────────────────────
  for (const intent of intents) {
    if (intent.keywords.some(keyword => text.includes(keyword))) {
      if (intent.category === 'faq' && faqData[intent.key]) {
        return {
          type: 'text',
          text: faqData[intent.key].content,
          quickReplies: faqData[intent.key].quickReplies
        };
      } else if (intent.category === 'greeting') {
        return {
          type: 'text',
          text: "👋 Hello! Welcome to BulkFlex. I'm here to help you find the perfect packaging solution.\n\nWhat are you looking for today?",
          quickReplies: ["Browse Products", "Shipping", "MOQ", "Contact Sales"]
        };
      }
    }
  }

  // ── 6. PRICE / QUOTE INQUIRY ──────────────────────────────────────────────
  if (hasAny(text, ['price', 'pricing', 'cost', 'quote', 'quotation', 'how much', 'rate', 'rates', 'per unit', 'per piece'])) {
    return {
      type: 'text',
      text: "💰 Pricing at BulkFlex depends on:\n\n• Product type & material\n• Order quantity (MOQ applies)\n• Custom printing requirements\n• Destination & shipping method\n\nFor an accurate quote, please contact our sales team with your specifications. We respond within 4 business hours!",
      quickReplies: ["MOQ", "Contact Sales", "Browse Products"]
    };
  }

  // ── 7. CERTIFICATIONS / COMPLIANCE ───────────────────────────────────────
  if (hasAny(text, ['certified', 'certification', 'iso', 'brcgss', 'food grade', 'sa 8000', 'sedex', 'compliance', 'standards', 'audit', 'audited'])) {
    return {
      type: 'text',
      text: "✅ BulkFlex Factory Certifications:\n\n• ISO 22000 — Food Safety Management\n• BRCGSS Food Grade — Global packaging standard\n• SEDEX / SA 8000 — Ethical sourcing & labour\n• SGS & EBV Audit-Friendly\n• 8+ Audited Factories\n• Structured 11-Step QC process\n\nAll compliance documents available upon request.",
      quickReplies: ["Materials", "Contact Sales", "Browse Products"]
    };
  }

  // ── 8. SUSTAINABILITY / ECO ───────────────────────────────────────────────
  if (hasAny(text, ['sustainable', 'eco', 'green', 'biodegradable', 'recyclable', 'recycled', 'environment', 'rpet', 'natural', 'organic'])) {
    return {
      type: 'text',
      text: "🌿 BulkFlex Sustainable Packaging Options:\n\n• Jute & Burlap — 100% natural & biodegradable\n• Cotton Bags — reusable, eco-friendly\n• rPET Fabrics — made from recycled plastic bottles\n• Biodegradable PP alternatives\n• All eco lines available with custom branding\n\nWe're committed to responsible manufacturing.",
      quickReplies: ["Browse Products", "Custom Printing", "Contact Sales"]
    };
  }

  // ── 9. DEFAULT FALLBACK ───────────────────────────────────────────────────
  return {
    type: 'text',
    text: "I'm not quite sure I understood that. Here are some things I can help you with:\n\n• 🔍 Product search — just describe what you need\n• 📦 Browse by category\n• 🚢 Shipping & export info\n• 💰 Pricing & MOQ guidance\n• 🎨 Custom printing options\n• 📞 Speak with our sales team",
    quickReplies: ["Browse Products", "Shipping", "MOQ", "Contact Sales"]
  };
};
