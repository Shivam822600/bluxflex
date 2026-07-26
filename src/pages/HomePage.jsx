import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import Reveal, { RevealGroup, revealItemVariants } from '../components/ui/Reveal';
import { motion } from 'framer-motion';
import Counter from '../components/ui/Counter';
import AdvantageCard from '../components/ui/AdvantageCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import ComparisonTable from '../components/ui/ComparisonTable';
import CertificationStrip from '../components/ui/CertificationStrip';
import FaqAccordion from '../components/ui/FaqAccordion';
import { CostRow, FloatingStatCard, ProblemSolutionCard } from '../components/ui/MiscCards';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Globe, 
  Award, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Package, 
  RefreshCw, 
  Target, 
  Sprout, 
  Factory, 
  Building2,
  Zap,
  Clock,
  Search,
  PackageX,
  HeartCrack,
  FileWarning
} from 'lucide-react';

// Product Image Assets
import asset_C_Conductive_Bag from '../assets/images/C-Conductive-Bag-297x300.jpg?url';
import asset_Diaper_Bag_1 from '../assets/images/Diaper-Bag-1-297x300.jpg?url';
import asset_Un_Bags from '../assets/images/Un-Bags-297x300.jpg?url';
import asset_Diaper_Bag from '../assets/images/Diaper-Bag-297x300.jpg?url';
import asset_RASCHEL_BAGS from '../assets/images/RASCHEL-BAGS-FABRIC-300x300.png?url';
import asset_LENO_FLAT_FABRIC from '../assets/images/LENO-FLAT-FABRIC-—-ROLLS-300x300.png?url';
import asset_leno_bag from '../assets/images/leno-bag.jpg?url';
import asset_wileted_leno_bag from '../assets/images/wileted-leno-bag.jpg?url';
import asset_printed_pp_woven from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';
import asset_liner_options from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md-300x300.jpg?url';
import asset_bottom_construction from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974-300x300.png?url';
import asset_juteburlap_bags from '../assets/images/juteburlap_bags-300x300.png?url';
import asset_jutesacks_printed from '../assets/images/jutesacks__printedbags-300x300.png?url';
import asset_horticultural from '../assets/images/horticultural__landscaping-300x300.png?url';
import asset_specialty_fabrics from '../assets/images/specialty_fabrics-300x300.png?url';
import asset_Monofilament_Fabrics from '../assets/images/Monofilament-Fabrics-297x300.jpg?url';
import asset_rPET_Fabrics from '../assets/images/rPET-Fabrics-297x300.jpg?url';
import asset_Lumber_Cover_Fabrics from '../assets/images/Lumber-Cover-Fabrics-297x300.jpg?url';
import asset_PP_shopping_bag from '../assets/images/PP-shopping-bag-297x300.jpg?url';
import asset_roofing_underlayment from '../assets/images/roofing_underlayment-300x300.png?url';
import asset_Company_Overview from '../assets/images/Company-Overview.png?url';
import asset_Manufacturing from '../assets/images/Manufacturing.png?url';

export default function HomePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [heroLangOpen, setHeroLangOpen] = useState(false);
  const [selectedHeroLang, setSelectedHeroLang] = useState('EN - English');
  const [openFaq, setOpenFaq] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevCategory = () => {
    const nextTab = activeTab > 0 ? activeTab - 1 : categories.length - 1;
    setActiveTab(nextTab);
  };

  const handleNextCategory = () => {
    const nextTab = activeTab < categories.length - 1 ? activeTab + 1 : 0;
    setActiveTab(nextTab);
  };


  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleOpenQuote = (productName = '') => {
    setSelectedProductForQuote(productName);
    setQuoteSubmitted(false);
    setInquiryModalOpen(true);
  };

  // Product categories & data
  const categories = [
    'FIBC (Jumbo Bags)',
    'Leno Bags & Fabric',
    'PP Woven Sacks',
    'Jute / Burlap',
    'Specialty Fabrics',
    'Retail Shopping Bags',
    'Agro Textiles'
  ];

  const productsData = [
    // FIBC (Jumbo Bags)
    [
      { title: 'UN Bag', desc: 'UN Certified Bags designed for safe transport of hazardous materials.', image: asset_C_Conductive_Bag, link: '/product/c-conductive-bag' },
      { title: 'Diaper Bag', desc: 'High-performance Diaper Bags for bulk absorbent media storage.', image: asset_Diaper_Bag_1, link: '/product/diaper-bag' },
      { title: 'Conductive Bag', desc: 'Electrostatic discharge protection for flammable environments.', image: asset_Un_Bags, link: '/product/un-bags' },
      { title: 'Baffle Bags', desc: 'Form-stable bulk containers engineered to save storage & freight.', image: asset_Diaper_Bag, link: '/product/baffle-bags' },
    ],
    // Leno Bags & Fabric
    [
      { title: 'Raschel Bags & Fabric', desc: 'Knitted breathable mesh bags ideal for fresh agricultural produce.', image: asset_RASCHEL_BAGS, link: '/product/raschel-bags-fabric' },
      { title: 'Leno Flat Fabric – Rolls', desc: 'High-strength Leno woven rolls for custom ventilation packaging.', image: asset_LENO_FLAT_FABRIC, link: '/product/leno-flat-fabric-rolls' },
      { title: 'Leno Bag', desc: 'Durable mesh packaging for onions, potatoes, and fresh crops.', image: asset_leno_bag, link: '/product/leno-bag' },
      { title: 'Wicketed Leno Bag', desc: 'Automated packing line mesh bags engineered for high-speed filling.', image: asset_wileted_leno_bag, link: '/product/wileted-leno-bag' },
    ],
    // PP Woven Sacks
    [
      { title: 'Printed PP Woven Sacks', desc: 'High-definition flexo printing up to 6 colors for retail branding.', image: asset_printed_pp_woven, link: '/product/print-options' },
      { title: 'Moisture Barrier Liners', desc: 'Internal PE liners providing 100% moisture protection.', image: asset_liner_options, link: '/product/liner-options' },
      { title: 'Reinforced Bottom Seams', desc: 'Double folded heavy-duty stitching for maximum load strength.', image: asset_bottom_construction, link: '/product/bottom-construction' },
      { title: 'Burlap Look PP Sacks', desc: 'Natural aesthetics combined with synthetic tensile durability.', image: asset_juteburlap_bags, link: '/product/top-finishes' },
    ],
    // Jute / Burlap
    [
      { title: 'Jute Burlap Sacks', desc: '100% eco-friendly biodegradable natural fiber packaging.', image: asset_juteburlap_bags, link: '/product/jute-burlap-bags' },
      { title: 'Custom Printed Jute', desc: 'Organic brand presentation with non-toxic water-based inks.', image: asset_jutesacks_printed, link: '/product/jute-sacks-printed' },
      { title: 'Soil & Nursery Bags', desc: 'Breathable burlap containers for landscaping and root protection.', image: asset_horticultural, link: '/product/horticultural-landscaping' },
      { title: 'Jute Twine & Cordage', desc: 'Heavy-duty industrial natural binding and packaging cords.', image: asset_specialty_fabrics, link: '/product/jute-twine-cord' },
    ],
    // Specialty Fabrics
    [
      { title: 'Monofilament Fabrics', desc: 'High tensile mesh fabrics for industrial filtration & shading.', image: asset_Monofilament_Fabrics, link: '/product/monofilament-fabrics' },
      { title: 'rPET Eco Fabrics', desc: '100% post-consumer recycled polyester woven packaging.', image: asset_rPET_Fabrics, link: '/product/rpet-fabrics' },
      { title: 'Lumber Cover Fabrics', desc: 'Weatherproof UV-stabilized heavy wraps for timber protection.', image: asset_Lumber_Cover_Fabrics, link: '/product/lumber-cover-fabrics' },
      { title: 'Roofing Underlayment', desc: 'Water-resistant synthetic membranes for modern roofing.', image: asset_roofing_underlayment, link: '/product/roofing-underlayment' },
    ],
    // Retail Shopping Bags
    [
      { title: 'PP Non-Woven Tote', desc: 'Reusable eco shopping totes designed for high-capacity retail.', image: asset_PP_shopping_bag, link: '/product/pp-shopping-bag' },
      { title: 'Laminated Grocery Bags', desc: 'Waterproof full-color photo printed retail shopping bags.', image: asset_printed_pp_woven, link: '/product/pp-shopping-bag' },
      { title: 'Foldable Eco Totes', desc: 'Compact durable promotional bags with reinforced handles.', image: asset_juteburlap_bags, link: '/product/pp-shopping-bag' },
      { title: 'Heavy Duty Carrier Sacks', desc: 'Multi-use retail packaging for hardware & bulk grocery.', image: asset_Diaper_Bag, link: '/product/pp-shopping-bag' },
    ],
    // Agro Textiles
    [
      { title: 'Agro Shade Nets', desc: 'UV treated crop shading nets for optimal solar protection.', image: asset_horticultural, link: '/product/hail-nets' },
      { title: 'Hail & Bird Protection', desc: 'High-density poly netting for agricultural orchard safety.', image: asset_Monofilament_Fabrics, link: '/product/hail-nets' },
      { title: 'Silage Bale Wrap', desc: 'Airtight stretch film for fodder preservation and storage.', image: asset_Lumber_Cover_Fabrics, link: '/product/silage-wrap' },
      { title: 'Weed Mat Barrier', desc: 'Heavy-duty ground cover preventing weed growth while draining.', image: asset_roofing_underlayment, link: '/product/house-wrap' },
    ]
  ];

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for bulk packaging?',
      a: 'Our MOQs depend on product customization. Standard FIBC bulk bags usually start at 1,000 units, while custom printed PP woven sacks start at 5,000 units. Container load consolidations are also available for multi-SKU orders.'
    },
    {
      q: 'Can BulkFlex handle multi-supplier order consolidation in India/Asia?',
      a: 'Yes, absolutely. We specialize in single-point procurement. We manage quality checks, production scheduling, and container optimization across multiple manufacturing facilities so you receive a single consolidated shipment.'
    },
    {
      q: 'Are your FIBC bags UN Certified for dangerous chemicals?',
      a: 'Yes, we supply UN Certified Type A, B, C (Conductive), and D FIBC bulk bags tested for hazardous cargo in compliance with international maritime and transport regulations.'
    },
    {
      q: 'What are your standard lead times for international freight?',
      a: 'Production lead time typically ranges from 2 to 4 weeks depending on order volume and custom specifications. Shipping duration varies by destination port (e.g., 18–25 days to Europe/US East Coast).'
    }
  ];

  return (
    <Layout>
      {/* 1. HERO SECTION — "Your Extended Arm in Asia" */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-brand-dark)', paddingTop: 'clamp(56px, 8vw, 96px)', paddingBottom: 'clamp(64px, 9vw, 120px)' }}>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide" style={{ color: 'var(--color-brand-green)' }}>
                <span className="w-6 h-px" style={{ background: 'var(--color-brand-green)' }} />
                Global Sourcing &amp; Industrial Packaging
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-extrabold text-white mt-5" style={{ fontSize: 'clamp(34px, 5vw, 54px)', lineHeight: 1.1 }}>
                Your <span style={{ color: 'var(--color-brand-green)' }}>extended arm</span> in Asia.<br />
                One contact. Zero compromise.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-white/75 text-lg max-w-xl leading-relaxed">
                We are not a middleman — we are your procurement team on the ground. 30+ audited factories across India and Vietnam, managed through a single relationship, governed by your standards.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-brand-green)', color: 'var(--color-brand-dark)' }}>
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border border-white/25 text-white">
                  Explore Products
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 pt-8 flex flex-wrap gap-x-10 gap-y-5" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <div>
                <div className="font-heading font-extrabold text-white text-2xl">
                  <Counter value={30} suffix="+" />
                </div>
                <div className="text-white/55 text-xs mt-1">Audited Factories — India &amp; Vietnam</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-white text-2xl">
                  <Counter value={20} suffix="+" />
                </div>
                <div className="text-white/55 text-xs mt-1">Years Industrial Experience</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-white text-2xl">11-Step</div>
                <div className="text-white/55 text-xs mt-1">Structured QC Process</div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* soft background graphic */}
        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(141,198,63,0.10) 0%, transparent 70%)' }} aria-hidden="true" />
      </section>

      {/* CERTIFICATION STRIP */}
      <section style={{ background: 'var(--color-bg-beige)', borderBottom: '1px solid var(--color-border)' }} className="py-6">
        <div className="container">
          <CertificationStrip items={['ISO 22000', 'ISO 9001', 'BRCGSS Food Grade', 'SEDEX / SA 8000', 'SGS & EBV Audit-Friendly']} className="justify-center" />
        </div>
      </section>

      {/* BULKFLEX ADVANTAGE — 01-06 */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div className="max-w-xl mb-12">
              <span className="text-[13px] font-bold uppercase tracking-wide inline-flex items-center gap-2" style={{ color: 'var(--color-brand-green)' }}>
                <span className="w-6 h-px" style={{ background: 'var(--color-brand-green)' }} />
                The BulkFlex Advantage
              </span>
              <h2 className="font-heading font-extrabold mt-3" style={{ color: 'var(--color-brand-dark)', fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
                Multi-Supplier Strength. Single-Contact Simplicity.
              </h2>
              <p className="mt-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Global procurement from Asia doesn't have to be complex. BulkFlex gives you the network, the systems, and the people — so you get the results without the overhead.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AdvantageCard number="01" title="One Contact. Many Audited Suppliers." tag="Multi-Supplier Access"
              description="You deal with one BulkFlex relationship manager who coordinates across our entire pre-audited supplier network — multi-supplier optionality, competitive pricing, and backup capacity, all through a single contact." />
            <AdvantageCard number="02" title="Your Extended Arm in Asia" tag="On-Ground Presence"
              description="BulkFlex operates on the ground in Asia, not from a desk overseas — real factory visits, in-person pre-shipment inspections, and face-to-face supplier accountability." />
            <AdvantageCard number="03" title="Audited Factories — No Unknowns" tag="Zero Unverified Vendors"
              description="Every manufacturing facility in our network has passed a structured factory audit covering production capacity, quality systems, compliance certifications, and export capability." />
            <AdvantageCard number="04" title="Compliance Built In — Not Bolted On" tag="Full Compliance Coverage"
              description="Documentation, batch traceability, certificate of origin, and pre-shipment inspection reports are embedded into every engagement, aligned to your import market requirements." />
            <AdvantageCard number="05" title="Buyer-Specific SOPs at Factory Level" tag="Repeatability"
              description="Your specifications and packaging standards are implemented at the factory as standard operating procedure — consistent across every order, not just the first one." />
            <AdvantageCard number="06" title="End-to-End Procurement Management" tag="Full-Cycle Management"
              description="From specification review through shortlisting, sampling, QC, compliance, and final container dispatch — we manage every stage and keep you informed at every milestone." />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 5-STEP TIMELINE */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: 'var(--color-brand-dark)' }}>
        <div className="container max-w-3xl">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-wide inline-flex items-center gap-2" style={{ color: 'var(--color-brand-green)' }}>
              <span className="w-6 h-px" style={{ background: 'var(--color-brand-green)' }} />
              How It Works
            </span>
            <h2 className="font-heading font-extrabold text-white mt-3 mb-10" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
              5 Steps From Enquiry to Cleared Container.
            </h2>
          </Reveal>
          <ProcessTimeline steps={[
            { title: 'Buyer Specs & Use-Case Review', tags: ['Specification Mapping', 'Compliance Assessment', 'Volume Planning'],
              description: 'Every engagement begins with a structured specification review, going deep on product requirements, end-use application, target markets, compliance obligations, and delivery timelines.' },
            { title: 'Factory Shortlisting — Audited Only', tags: ['Pre-Audited Network', 'Buyer Approval Required'],
              description: 'We filter our pre-audited supplier network against your specifications and present a transparent shortlist with production capacity, certifications, lead times, and pricing.' },
            { title: 'Sampling & Pre-Shipment Quality Control', tags: ['Sample Review', 'Photo Documentation', 'Dual Sign-Off'],
              description: 'Samples are reviewed against your approved specifications before bulk production. A physical pre-shipment inspection follows, with a full report before anything dispatches.' },
            { title: 'Contract, Compliance & Batch Traceability', tags: ['Batch Traceability', 'Export Compliance'],
              description: 'Full batch traceability from raw material through finished goods, export/import compliance verification, and buyer-specific SOPs implemented at factory level.' },
            { title: 'Container Dispatch & Full Documentation', tags: ['Bill of Lading', 'Certificate of Origin', 'PSI Report'],
              description: 'Your shipment is loaded, sealed, and dispatched with a complete, buyer-aligned documentation package, coordinated with freight partners through to port clearance.' },
          ]} />
        </div>
      </section>

      {/* WHAT QA FAILURES ACTUALLY COST */}
      <section style={{ padding: 'clamp(56px, 7vw, 80px) 0', background: 'var(--color-brand-navy)' }}>
        <div className="container max-w-2xl">
          <Reveal>
            <h2 className="font-heading font-extrabold text-white mb-3" style={{ fontSize: 'clamp(22px, 2.8vw, 28px)' }}>What QA Failures Actually Cost</h2>
            <p className="text-white/70 text-sm mb-6">Quality and compliance issues translate directly into real, measurable costs — often ones that are difficult to recover.</p>
          </Reveal>
          <RevealGroup className="space-y-3">
            <motion.div variants={revealItemVariants}><CostRow icon={PackageX} label="Rejected containers" description="full return or re-export costs, plus replacement lead time" /></motion.div>
            <motion.div variants={revealItemVariants}><CostRow icon={Clock} label="Port demurrage" description="documentation failures hold containers; the clock runs at your cost" /></motion.div>
            <motion.div variants={revealItemVariants}><CostRow icon={Search} label="Regulatory penalties" description="compliance failures at import can trigger fines and repeat inspection regimes" /></motion.div>
            <motion.div variants={revealItemVariants}><CostRow icon={HeartCrack} label="Customer relationship damage" description="a quality failure passed downstream is rarely a recoverable event" /></motion.div>
            <motion.div variants={revealItemVariants}><CostRow icon={FileWarning} label="Rework and re-labelling costs" description="often treated as a normal cost of direct sourcing, when they shouldn't be" /></motion.div>
          </RevealGroup>
        </div>
      </section>

      {/* DIRECT SOURCING VS BULKFLEX */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: 'var(--color-bg-beige)' }}>
        <div className="container">
          <ComparisonTable
            title="Side-by-Side: Direct Sourcing vs. Working With BulkFlex"
            subtitle="For buyers who have been importing directly, this is what changes — and what doesn't."
            rows={[
              { label: 'Supplier contacts to manage', direct: 'Multiple — each with different contacts, MOQs, lead times', directStatus: 'no', bulkflex: 'One BulkFlex contact manages all suppliers' },
              { label: 'Factory verification', direct: 'You rely on supplier-provided info and references', directStatus: 'no', bulkflex: 'Every factory pre-audited by BulkFlex before shortlisting' },
              { label: 'Pre-shipment inspection', direct: 'Arranged separately at your cost and coordination', directStatus: 'partial', bulkflex: 'Conducted by our on-ground team, included in every order' },
              { label: 'Batch traceability', direct: 'Typically absent or incomplete', directStatus: 'no', bulkflex: 'Full lot-level documentation from production to dispatch' },
              { label: 'Compliance documentation', direct: 'Variable — depends on factory capability and your follow-up', directStatus: 'partial', bulkflex: 'Complete, buyer-aligned package every shipment' },
              { label: 'Backup supply options', direct: "Single supplier — if they can't deliver, you can't ship", directStatus: 'no', bulkflex: 'Multiple audited alternatives across our network' },
              { label: 'Your existing supplier relationships', direct: 'These stay intact', directStatus: 'partial', bulkflex: "BulkFlex adds infrastructure around them, doesn't replace them" },
            ]}
          />
        </div>
      </section>

      {/* WE INVITE YOU INTO THE FACTORY */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container grid gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-wide inline-flex items-center gap-2" style={{ color: 'var(--color-brand-green)' }}>
              <span className="w-6 h-px" style={{ background: 'var(--color-brand-green)' }} />
              Transparency First
            </span>
            <h2 className="font-heading font-extrabold mt-3 mb-4" style={{ color: 'var(--color-brand-dark)', fontSize: 'clamp(24px, 3vw, 32px)' }}>
              We Invite You Into the Factory.
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
              BulkFlex actively encourages and fully coordinates buyer factory visits across our supplier network — whether you want to assess a new facility, align on specification details, or verify a certification firsthand.
            </p>
            <ul className="space-y-2 mt-5">
              {['Full facility walk-through with production team access', 'Specification alignment directly on the production floor', 'BulkFlex team present for translation and coordination', 'Compliance and certification verification in person'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-main)' }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brand-green)' }} />{item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-7" style={{ background: 'var(--color-brand-dark)' }}>
              <div className="text-[11px] font-bold uppercase tracking-wide text-white/60 mb-4">How We Coordinate Your Visit</div>
              {[
                ['You Tell Us What You Want to See', 'Share your objectives — new facility assessment, spec review, certification audit.'],
                ['BulkFlex Handles Logistics', 'Factory scheduling, local transport, translation, and briefing of production teams.'],
                ['We Accompany You Throughout', 'A BulkFlex team member is with you for the entire visit.'],
                ['Post-Visit Report & Next Steps', 'A summary of findings and recommendations following your visit.'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3 mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: 'var(--color-brand-green)', color: 'var(--color-brand-dark)' }}>{i + 1}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-white/60 text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section style={{ background: '#FFFFFF', padding: '48px 0', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px'
          }}>
            {[
              { number: '20+', label: 'Years Industrial Experience', icon: <Award color="#8DC63F" size={26} /> },
              { number: '30+', label: 'Vetted Manufacturers Network', icon: <ShieldCheck color="#8DC63F" size={26} /> },
              { number: 'Multi-SKU', label: 'Container Optimization', icon: <Truck color="#8DC63F" size={26} /> },
            ].map((stat, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px 28px',
                background: '#FBF1E6',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(7,40,52,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#142E3D', lineHeight: '1.15' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6' }}>
        <div className="container">
          
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px auto' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Industrial Grade Range
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginTop: '6px', marginBottom: '12px' }}>
              Our Product Portfolio
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Engineered flexible packaging solutions adhering to global ISO & UN safety specifications.
            </p>
          </div>

          {/* Horizontal Scrollable Filter Pills with Carousel Navigation Controls */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '44px' }}>
            
            {/* Left Carousel Arrow */}
            <button
              onClick={() => {
                handleScroll('left');
                handlePrevCategory();
              }}
              aria-label="Previous Category"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#142E3D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#142E3D';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#142E3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#142E3D';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Container for Pills */}
            <div 
              ref={scrollContainerRef}
              className="categories-scroll-wrapper"
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                padding: '6px 4px 12px 4px',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                flexGrow: 1
              }}
            >
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: activeTab === idx ? '#142E3D' : '#FFFFFF',
                    color: activeTab === idx ? '#FFFFFF' : '#475569',
                    border: activeTab === idx ? 'none' : '1px solid #E2E8F0',
                    padding: '13px 26px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: activeTab === idx ? '0 8px 24px rgba(7,40,52,0.25)' : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Carousel Arrow */}
            <button
              onClick={() => {
                handleScroll('right');
                handleNextCategory();
              }}
              aria-label="Next Category"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#142E3D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#142E3D';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#142E3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#142E3D';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <ChevronRight size={20} />
            </button>

          </div>


          {/* 4-Column Responsive Product Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {productsData[activeTab]?.map((prod, idx) => (
              <div 
                key={idx}
                className="product-card-premium"
              >
                {/* Product Image Container */}
                <div className="img-container" style={{ height: '230px', background: '#F1F5F9', position: 'relative' }}>
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Subtle Badge Overlay */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(7, 40, 52, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '50px'
                  }}>
                    Export Grade
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 230px)', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                      {prod.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.55', marginBottom: '20px' }}>
                      {prod.desc}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                    <button
                      onClick={() => handleOpenQuote(prod.title)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#8DC63F',
                        fontWeight: '800',
                        fontSize: '13px',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      Get Spec & Quote →
                    </button>
                    <Link 
                      to={prod.link}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#F0F7E4',
                        color: '#142E3D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#8DC63F';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F0F7E4';
                        e.currentTarget.style.color = '#142E3D';
                      }}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STORYTELLING SECTION (Full-Width Organic Wave Background) */}
      <section style={{ position: 'relative', background: '#142E3D', color: '#FFFFFF', padding: '96px 0' }}>
        
        {/* Top Organic SVG Wave Divider */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#FBF1E6' }}>
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Row 1: Image Left, Text Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={asset_Company_Overview} 
                alt="BulkFlex Manufacturing Facility" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
              <div 
                className="glass-card-dark"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#8DC63F' }}>Multi-Plant Sourcing</div>
                <div style={{ fontSize: '12px', color: '#CBD5E1' }}>Integrated Quality Assurance</div>
              </div>
            </div>

            <div>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                End-to-End Execution
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: '800', marginTop: '12px', marginBottom: '22px', lineHeight: '1.2' }}>
                Single-Point Control for Multi-Supplier Chains
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                Managing multiple Asian suppliers can be fragmented and unpredictable. BulkFlex coordinates vetted manufacturing partners to deliver consistent quality, optimized container loading, and total transparency under one unified management system.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Rigorous factory audits & quality checks', 'Multi-SKU container loading optimization', 'Real-time production and shipment tracking'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={20} color="#8DC63F" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}>
            <div style={{ order: 2 }}>
              <img 
                src={asset_Manufacturing} 
                alt="Quality Assurance and Testing" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>
            <div style={{ order: 1 }}>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                Compliance & Quality
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: '800', marginTop: '12px', marginBottom: '22px', lineHeight: '1.2' }}>
                Built to International Safety Standards
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                From UN-certified dangerous goods containers to food-grade cleanroom FIBCs, every product undergoes strict physical testing, tensile strength evaluation, and UV resistance inspection prior to dispatch.
              </p>
              <Link to="/about-us" style={{
                color: '#8DC63F',
                fontWeight: '800',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Learn About Our Standards →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Organic SVG Wave Divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#FFFFFF' }}>
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

      </section>

      {/* 5. VISION & VALUES */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 52px auto' }}>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Vision & Core Values
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Guiding principles that drive our global packaging supply network.
            </p>
          </div>

          {/* 4-Column Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {[
              { title: 'Quality Assurance', desc: 'Inspection and compliance checks aligned with international dangerous goods & food-grade packaging standards.', icon: <ShieldCheck size={26} color="#8DC63F" /> },
              { title: 'Supply Chain Continuity', desc: 'Multi-plant sourcing designed to support consistent delivery timelines.', icon: <RefreshCw size={26} color="#8DC63F" /> },
              { title: 'Cost Optimization', desc: 'Direct mill pricing with container space optimization to help reduce landed costs.', icon: <Target size={26} color="#8DC63F" /> },
              { title: 'Sustainable Innovation', desc: 'Sourcing eco-friendly rPET fabrics and recyclable mono-material bulk bags.', icon: <Sprout size={26} color="#8DC63F" /> }
            ].map((val, i) => (
              <div key={i} style={{
                background: '#FBF1E6',
                borderRadius: '20px',
                padding: '36px 28px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(7,40,52,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px'
                }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.65' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section style={{ padding: 'clamp(56px, 7vw, 80px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 44px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
              Industries We Serve
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px' }}>
              Customized flexible packaging solutions for diverse global sectors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Chemicals & Resins', icon: <Factory size={24} color="#8DC63F" /> },
              { title: 'Agriculture & Grain', icon: <Sprout size={24} color="#8DC63F" /> },
              { title: 'Construction Materials', icon: <Building2 size={24} color="#8DC63F" /> },
              { title: 'Food & Pharma', icon: <Package size={24} color="#8DC63F" /> },
            ].map((ind, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D' }}>
                  {ind.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE FAQ ACCORDION */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Everything you need to know about our sourcing, quality, and shipping workflow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#142E3D'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    color="#8DC63F" 
                    style={{ 
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }} 
                  />
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 28px 24px 28px', color: '#475569', fontSize: '15px', lineHeight: '1.65', borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RFQ CTA BANNER */}
      <section style={{ 
        background: 'linear-gradient(135deg, #142E3D 0%, #0D3B43 100%)',
        color: '#FFFFFF',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '760px', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', fontWeight: '800', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
            Ready to Optimize Your Industrial Packaging Supply?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', lineHeight: '1.65', marginBottom: '36px' }}>
            Get factory-direct quotes, custom engineering specs, and full container shipping schedules within 24 hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenQuote()}
              style={{
                background: '#8DC63F',
                color: '#142E3D',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 194, 168, 0.35)',
                transition: 'transform 0.2s'
              }}
            >
              Request Quick Inquiry
            </button>
            <Link
              to="/buyer-tools"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '15px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s'
              }}
            >
              Explore Buyer Tools
            </Link>
          </div>
        </div>
      </section>


      {/* 10. FAST INQUIRY / QUOTE MODAL */}
      {inquiryModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(7, 40, 52, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: '700',
                color: '#64748B'
              }}
            >
              ✕
            </button>

            {!quoteSubmitted ? (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                    Request B2B Quote
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>
                    {selectedProductForQuote 
                      ? `Inquiring for: ${selectedProductForQuote}` 
                      : 'Fill in your requirements for rapid pricing & specifications.'}
                  </p>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@company.com" 
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                      Packaging Requirements / Estimated Quantity
                    </label>
                    <textarea 
                      rows="3" 
                      placeholder="Describe bag specifications, dimensions, quantity, or target port..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'none'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#142E3D',
                      color: '#FFFFFF',
                      padding: '14px',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '8px',
                      boxShadow: '0 8px 20px rgba(7,40,52,0.2)'
                    }}
                  >
                    Submit RFQ
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle2 size={36} color="#8DC63F" />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                  Quote Request Received!
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                  Our global packaging engineers will review your request and send pricing within 24 business hours.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  style={{
                    background: '#8DC63F',
                    color: '#142E3D',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </Layout>
  );
}