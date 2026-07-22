import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  EN: {
    // Header & Navigation
    home: 'Home',
    products: 'Products',
    rpetFibc: 'RPET FIBC',
    paperBag: 'Multiwall Paper Bag',
    buyerCorner: 'Buyer Corner',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    brochure: 'Brochure',
    liveDesks: 'LIVE REGIONAL DESKS:',

    // Hero & Home Section
    heroTag: 'GLOBAL PACKAGING & INDUSTRIAL SOURCING',
    heroTitle: 'Direct Sourcing Network Across India & Vietnam',
    heroDesc: 'Connecting global buyers with pre-audited, high-capacity manufacturing facilities. Zero middleman markup, total transparency.',
    getQuote: 'Request Specs Consultation',
    ourProducts: 'Our Core Product Categories',
    viewAll: 'View All Products',
    whyBulkFlex: 'The BulkFlex Advantage',
    buyerJourney: 'Your Buyer Journey',

    // Product Categories
    catFibc: 'FIBC Jumbo Bag',
    catLeno: 'Leno Bags & Fabric',
    catPpWoven: 'PP Woven Sacks',
    catJute: 'Jute / Burlap',
    catSpecialty: 'Specialty Fabrics',
    catRetail: 'Retail Shopping Bags',
    catAgro: 'Agro Textiles',
    catLiners: 'Container Liners',

    // Detailed Product Descriptions
    unBagTitle: 'UN Bag',
    unBagDesc: 'UN Certified Bags designed for safe transport of hazardous materials according to strict international shipping standards.',
    diaperBagTitle: 'Diaper Bag',
    diaperBagDesc: 'High-performance Diaper Bags engineered for bulk absorbent media storage and industrial hygiene product transport.',
    conductiveBagTitle: 'Conductive Bag',
    conductiveBagDesc: 'Type C electrostatic discharge protection designed for safe handling in volatile and flammable dust environments.',
    baffleBagTitle: 'Baffle Bags',
    baffleBagDesc: 'Form-stable bulk containers with internal fabric baffles engineered to maximize warehouse storage & container freight capacity.',

    // Key Advantage Cards
    oneContact: '01. One Contact. Many Audited Suppliers.',
    oneContactDesc: 'You deal with one BulkFlex relationship manager who coordinates across our entire pre-audited supplier network. You get multi-supplier optionality, competitive pricing, and backup capacity all through a single professional contact. No more supplier juggling.',
    armAsia: '02. Your Extended Arm in Asia',
    armAsiaDesc: 'BulkFlex operates on the ground in Asia — not from a desk overseas. That means real factory visits, in-person pre-shipment inspections, and face-to-face supplier accountability. We represent your interests exactly as an internal procurement team would.',
    auditedFactories: '03. Audited Factories — No Unknowns',
    auditedFactoriesDesc: 'Every manufacturing facility in our network has passed a structured factory audit covering production capacity, quality management systems, compliance certifications, workforce standards, and export capability. You never deal with an unknown vendor.',
    complianceBuilt: '04. Compliance Built In — Not Bolted On',
    complianceBuiltDesc: 'Documentation, batch traceability, certificate of origin, pre-shipment inspection reports, and lab testing are not add-ons — they are embedded into every BulkFlex engagement. Your shipments arrive with a complete compliance package.',
    sopsFactory: '05. Buyer-Specific SOPs at Factory Level',
    sopsFactoryDesc: 'Your specifications, your packaging standards, your labelling requirements implemented at the factory as standard operating procedures. This ensures consistency across every order, not just the first one.',
    endToEnd: '06. End-to-End Procurement Management',
    endToEndDesc: 'From your first specification review through factory shortlisting, sampling, QC, compliance, and final container dispatch — BulkFlex manages every stage and keeps you informed at every milestone.',

    // Common CTAs & Buttons
    consultation: 'Start Sourcing Consultation',
    exploreProducts: 'Explore Products',
    contactSales: 'Contact Sales Team',
    downloadPdf: 'Download Specification PDF',

    // Footer & Miscellaneous
    footerDesc: 'Your reliable partner for flexible packaging and logistics solutions. Building relationships and delivering value every container.',
    footerRights: 'All Rights Reserved.',
    quickNav: 'Navigation',
    globalHubs: 'Global Hubs',
    contactHq: 'Contact HQ'
  },
  ES: {
    // Header & Navigation
    home: 'Inicio',
    products: 'Productos',
    rpetFibc: 'RPET FIBC',
    paperBag: 'Bolsa de Papel Multiwall',
    buyerCorner: 'Rincón del Comprador',
    aboutUs: 'Sobre Nosotros',
    contactUs: 'Contacto',
    brochure: 'Folleto',
    liveDesks: 'OFICINAS REGIONALES EN VIVO:',

    // Hero & Home Section
    heroTag: 'EMBALAJE GLOBAL Y ABASTECIMIENTO INDUSTRIAL',
    heroTitle: 'Red de Abastecimiento Directo en India y Vietnam',
    heroDesc: 'Conectando compradores globales con instalaciones de fabricación auditadas. Sin intermediarios, transparencia total.',
    getQuote: 'Solicitar Consulta de Especificaciones',
    ourProducts: 'Nuestras Categorías Principales de Productos',
    viewAll: 'Ver Todos los Productos',
    whyBulkFlex: 'La Ventaja BulkFlex',
    buyerJourney: 'Tu Viaje de Comprador',

    // Product Categories
    catFibc: 'Bolsa Jumbo FIBC',
    catLeno: 'Bolsas y Tejidos Leno',
    catPpWoven: 'Sacos Tejidos de PP',
    catJute: 'Yute / Arpillera',
    catSpecialty: 'Tejidos Especiales',
    catRetail: 'Bolsas de Compra',
    catAgro: 'Agrotextiles',
    catLiners: 'Revestimientos para Contenedores',

    // Detailed Product Descriptions
    unBagTitle: 'Bolsa UN Certificada',
    unBagDesc: 'Bolsas certificadas por la ONU diseñadas para el transporte seguro de materiales peligrosos según estrictas normas internacionales de envío.',
    diaperBagTitle: 'Bolsa de Pañales Industrial',
    diaperBagDesc: 'Bolsas de alto rendimiento diseñadas para el almacenamiento a granel de medios absorbentes y transporte higiénico industrial.',
    conductiveBagTitle: 'Bolsa Conductora Tipo C',
    conductiveBagDesc: 'Protección contra descargas electrostáticas de Tipo C diseñada para el manejo seguro en entornos con polvo inflamable y volátil.',
    baffleBagTitle: 'Bolsas con Tabiques (Baffle)',
    baffleBagDesc: 'Contenedores a granel de forma estable con tabiques internos diseñados para maximizar el almacenamiento y el flete en contenedores.',

    // Key Advantage Cards
    oneContact: '01. Un Contacto. Muchos Proveedores Auditados.',
    oneContactDesc: 'Trata con un solo gerente de relaciones de BulkFlex que coordina toda nuestra red de proveedores pre-auditados. Obtén variedad de proveedores, precios competitivos y capacidad de respaldo a través de un único contacto profesional. Sin malabares con proveedores.',
    armAsia: '02. Tu Brazo Extendido en Asia',
    armAsiaDesc: 'BulkFlex opera directamente en Asia, no desde un escritorio en el extranjero. Eso significa visitas reales a fábricas, inspecciones en persona antes del envío y responsabilidad presencial del proveedor. Representamos tus intereses como un equipo propio.',
    auditedFactories: '03. Fábricas Auditadas — Sin Incógnitas',
    auditedFactoriesDesc: 'Cada instalación de fabricación en nuestra red ha pasado una auditoría estructurada que cubre capacidad de producción, gestión de calidad, certificaciones y capacidad de exportación. Nunca tratarás con un proveedor desconocido.',
    complianceBuilt: '04. Cumplimiento Integrado — No Añadido',
    complianceBuiltDesc: 'La documentación, trazabilidad de lotes, certificado de origen, informes de inspección e informes de laboratorio están integrados en cada pedido. Tus envíos llegan con un paquete de cumplimiento completo.',
    sopsFactory: '05. SOPs Específicos a Nivel de Fábrica',
    sopsFactoryDesc: 'Tus especificaciones, estándares de embalaje y requisitos de etiquetado se implementan en la fábrica como procedimientos operativos estándar. Esto garantiza consistencia en cada pedido repetido.',
    endToEnd: '06. Gestión de Compras de Extremo a Extremo',
    endToEndDesc: 'Desde la primera revisión de especificaciones hasta la preselección de fábrica, muestreo, control de calidad, cumplimiento y despacho final del contenedor: BulkFlex gestiona cada etapa.',

    // Common CTAs & Buttons
    consultation: 'Iniciar Consulta de Abastecimiento',
    exploreProducts: 'Explorar Productos',
    contactSales: 'Contactar al Equipo de Ventas',
    downloadPdf: 'Descargar PDF de Especificaciones',

    // Footer & Miscellaneous
    footerDesc: 'Su socio confiable en soluciones de embalaje flexible y logística. Construyendo relaciones y entregando valor en cada contenedor.',
    footerRights: 'Todos los derechos reservados.',
    quickNav: 'Navegación',
    globalHubs: 'Centros Globales',
    contactHq: 'Sede de Contacto'
  },
  FR: {
    // Header & Navigation
    home: 'Accueil',
    products: 'Produits',
    rpetFibc: 'RPET FIBC',
    paperBag: 'Sac en Papier Multi-parois',
    buyerCorner: 'Espace Acheteur',
    aboutUs: 'À Propos',
    contactUs: 'Contactez-nous',
    brochure: 'Brochure',
    liveDesks: 'BUREAUX RÉGIONAUX EN DIRECT:',

    // Hero & Home Section
    heroTag: 'EMBALLAGE MONDIAL ET SOURCING INDUSTRIEL',
    heroTitle: 'Réseau de Sourcing Direct en Inde et au Vietnam',
    heroDesc: 'Connecter les acheteurs mondiaux à des usines pré-auditées. Sans intermédiaire, transparence totale.',
    getQuote: 'Demander une Consultation',
    ourProducts: 'Nos Catégories Principales de Produits',
    viewAll: 'Voir Tous les Produits',
    whyBulkFlex: 'L\'Avantage BulkFlex',
    buyerJourney: 'Votre Parcours d\'Acheteur',

    // Product Categories
    catFibc: 'Grand Sac Jumbo FIBC',
    catLeno: 'Sacs et Tissus Leno',
    catPpWoven: 'Sacs Tissés en PP',
    catJute: 'Jute / Toile de Jute',
    catSpecialty: 'Tissus Spéciaux',
    catRetail: 'Sacs de Shopping',
    catAgro: 'Textiles Agricoles',
    catLiners: 'Doublures de Conteneurs',

    // Detailed Product Descriptions
    unBagTitle: 'Sac Homologué UN',
    unBagDesc: 'Sacs certifiés UN conçus pour le transport en toute sécurité de matières dangereuses selon les normes internationales strictes.',
    diaperBagTitle: 'Sac Absorbeur Industriel',
    diaperBagDesc: 'Sacs haute performance conçus pour le stockage en vrac de produits absorbants et l\'hygiène industrielle.',
    conductiveBagTitle: 'Sac Conducteur Type C',
    conductiveBagDesc: 'Protection contre les décharges électrostatiques de type C conçue pour les environnements volatiles à poussière inflammable.',
    baffleBagTitle: 'Sacs à Parois Interne (Baffle)',
    baffleBagDesc: 'Conteneurs souples indéformables intégrant des renforts internes pour optimiser le stockage et le fret maritime.',

    // Key Advantage Cards
    oneContact: '01. Un Contact. Plusieurs Fournisseurs Audités.',
    oneContactDesc: 'Vous traitez avec un seul responsable BulkFlex qui coordonne l\'ensemble de notre réseau de fournisseurs pré-audités. Vous obtenez un choix multi-fournisseurs et une capacité de secours via un contact unique.',
    armAsia: '02. Votre Bras Droit en Asie',
    armAsiaDesc: 'BulkFlex opère sur le terrain en Asie — visites réelles d\'usines, inspections physiques avant expédition et responsabilité directe des fournisseurs. Nous représentons vos intérêts.',
    auditedFactories: '03. Usines Auditées — Aucune Inconnue',
    auditedFactoriesDesc: 'Chaque site de fabrication de notre réseau a passé un audit d\'usine structuré couvrant la capacité de production, les systèmes de qualité et la capacité d\'exportation.',
    complianceBuilt: '04. Conformité Intégrée',
    complianceBuiltDesc: 'La documentation, la traçabilité des lots, les certificats d\'origine et les rapports d\'inspection sont intégrés à chaque commande sans coût caché.',
    sopsFactory: '05. Procédures Spécifiques à l\'Usine',
    sopsFactoryDesc: 'Vos spécifications, normes d\'emballage et exigences d\'étiquetage sont appliquées au niveau de l\'usine sous forme de procédures opérationnelles standard.',
    endToEnd: '06. Gestion des Achats de Bout en Bout',
    endToEndDesc: 'De l\'examen des spécifications au choix de l\'usine, à l\'échantillonnage, au contrôle qualité, à la conformité et à l\'expédition finale du conteneur.',

    // Common CTAs & Buttons
    consultation: 'Démarrer une Consultation',
    exploreProducts: 'Explorer les Produits',
    contactSales: 'Contacter l\'Équipe Commerciale',
    downloadPdf: 'Télécharger le PDF',

    // Footer & Miscellaneous
    footerDesc: 'Votre partenaire fiable pour les emballages flexibles et les solutions logistiques.',
    footerRights: 'Tous droits réservés.',
    quickNav: 'Navigation',
    globalHubs: 'Centres Mondiaux',
    contactHq: 'Siège Social'
  },
  DE: {
    // Header & Navigation
    home: 'Startseite',
    products: 'Produkte',
    rpetFibc: 'RPET FIBC',
    paperBag: 'Mehrwandiger Papiersack',
    buyerCorner: 'Einkäufer-Bereich',
    aboutUs: 'Über Uns',
    contactUs: 'Kontakt',
    brochure: 'Broschüre',
    liveDesks: 'LIVE REGIONALDESKS:',

    // Hero & Home Section
    heroTag: 'GLOBALE VERPACKUNG & INDUSTRIELLES SOURCING',
    heroTitle: 'Direktes Beschaffungsnetzwerk in Indien & Vietnam',
    heroDesc: 'Verbindung globaler Einkäufer mit vorgeprüften Fertigungsstätten. Ohne Zwischenhändler, volle Transparenz.',
    getQuote: 'Spezifikationsanfrage',
    ourProducts: 'Unsere Hauptproduktkategorien',
    viewAll: 'Alle Produkte Anzeigen',
    whyBulkFlex: 'Der BulkFlex-Vorteil',
    buyerJourney: 'Ihre Einkäufer-Reise',

    // Product Categories
    catFibc: 'FIBC Big Bag',
    catLeno: 'Leno-Säcke & Gewebe',
    catPpWoven: 'PP-Gewebesäcke',
    catJute: 'Jute / Sackleinen',
    catSpecialty: 'Spezialgewebe',
    catRetail: 'Tragetaschen',
    catAgro: 'Agrartextilien',
    catLiners: 'Container-Inliner',

    // Detailed Product Descriptions
    unBagTitle: 'UN-Zertifizierter Sack',
    unBagDesc: 'UN-zertifizierte Säcke für den sicheren Transport gefährlicher Güter gemäß strengen internationalen Transportvorschriften.',
    diaperBagTitle: 'Industrie-Absorbersack',
    diaperBagDesc: 'Hochleistungssäcke für die Lagerung von Absorptionsmitteln und den Transport von Industriehygieneartikeln.',
    conductiveBagTitle: 'Leitfähiger Bag Typ C',
    conductiveBagDesc: 'Elektrostatische Entladungsschutzhülle Typ C für die sichere Handhabung in brennbaren Staubumgebungen.',
    baffleBagTitle: 'Formstabile Form-Bags (Baffle)',
    baffleBagDesc: 'Formstabile Großbehälter mit inneren Gewebestegen zur maximalen Ausnutzung von Lager- und Containerfrachtraum.',

    // Key Advantage Cards
    oneContact: '01. Ein Ansprechpartner. Viele Geprüfte Lieferanten.',
    oneContactDesc: 'Sie arbeiten mit einem BulkFlex-Ansprechpartner zusammen, der unser gesamtes vorgeprüftes Lieferantennetzwerk koordiniert. Sie erhalten Lieferantenvielfalt und Ersatzkapazitäten.',
    armAsia: '02. Ihr Verlängerter Arm in Asien',
    armAsiaDesc: 'BulkFlex ist direkt vor Ort in Asien aktiv — echte Werksbesuche, persönliche Inspektionen vor dem Versand und Lieferantenverantwortung vor Ort.',
    auditedFactories: '03. Geprüfte Fabriken — Keine Unsicherheiten',
    auditedFactoriesDesc: 'Jede Fertigungsstätte hat ein strukturiertes Werksaudit für Produktionskapazität, Qualitätsmanagement und Exportfähigkeit bestanden.',
    complianceBuilt: '04. Integrierte Compliance',
    complianceBuiltDesc: 'Chargenrückverfolgbarkeit, Ursprungszeugnisse und Inspektionsberichte sind fest in jedem Auftrag integriert.',
    sopsFactory: '05. Käuferspezifische SOPs auf Werksebene',
    sopsFactoryDesc: 'Ihre Spezifikationen und Verpackungsstandards werden auf Werksebene als Standardarbeitsanweisungen umgesetzt.',
    endToEnd: '06. Durchgängiges Beschaffungsmanagement',
    endToEndDesc: 'Von der Erstprüfung über Werksauswahl, Mustererstellung, Qualitätskontrolle bis zum finalen Containerversand.',

    // Common CTAs & Buttons
    consultation: 'Beratung Starten',
    exploreProducts: 'Produkte Entdecken',
    contactSales: 'Vertriebskontakt',
    downloadPdf: 'Spezifikations-PDF Herunterladen',

    // Footer & Miscellaneous
    footerDesc: 'Ihr zuverlässiger Partner für flexible Verpackungen und Logistiklösungen.',
    footerRights: 'Alle Rechte vorbehalten.',
    quickNav: 'Navigation',
    globalHubs: 'Globale Zentren',
    contactHq: 'Zentrale'
  },
  AR: {
    // Header & Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    rpetFibc: 'أكياس RPET FIBC',
    paperBag: 'أكياس ورقية متعددة الطبقات',
    buyerCorner: 'ركن المشتري',
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    brochure: 'الكتيب التعريف',
    liveDesks: 'مكاتب الإقليمية المباشرة:',

    // Hero & Home Section
    heroTag: 'التغليف العالمي والتوريد الصناعي',
    heroTitle: 'شبكة التوريد المباشر في الهند وفيتنام',
    heroDesc: 'ربط المشترين العالميين بالمصانع المعتمدة مسبقًا. بدون وسطاء، شفافية كاملة.',
    getQuote: 'طلب استشارة المواصفات',
    ourProducts: 'فئات المنتجات الرئيسية لدينا',
    viewAll: 'عرض جميع المنتجات',
    whyBulkFlex: 'ميزة بلك فليكس',
    buyerJourney: 'رحلة المشتري الخاصة بك',

    // Product Categories
    catFibc: 'أكياس جامبو FIBC',
    catLeno: 'أكياس وقماش لينو',
    catPpWoven: 'أكياس منسوجة بولي بروبيلين',
    catJute: 'خيش / خيش الجوت',
    catSpecialty: 'أقمشة متخصصة',
    catRetail: 'أكياس التسوق',
    catAgro: 'المنسوجات الزراعية',
    catLiners: 'بطانات الحاويات',

    // Detailed Product Descriptions
    unBagTitle: 'كيس معتمد من الأمم المتحدة UN',
    unBagDesc: 'أكياس معتمدة من الأمم المتحدة مصممة لنقل المواد الخطرة بأمان وفقًا لمعايير الشحن الدولية الصارمة.',
    diaperBagTitle: 'كيس الامتصاص الصناعي',
    diaperBagDesc: 'أكياس عالية الأداء مصممة لتخزين المواد الماصة بكميات كبيرة ونقل منتجات النظافة الصناعية.',
    conductiveBagTitle: 'كيس موصل النوع C',
    conductiveBagDesc: 'حماية من التفريغ الكهرومغناطيسي من النوع C مصممة للتعامل الآمن في بيئات الغبار المشتعلة.',
    baffleBagTitle: 'أكياس بحواجز داخلية (Baffle)',
    baffleBagDesc: 'حاويات كبيرة مستقرة الشكل مزودة بحواجز قماشية داخلية مصممة لزيادة سعة التخزين والشحن إلى الحدو القصوى.',

    // Key Advantage Cards
    oneContact: '01. جهة اتصال واحدة. العديد من الموردين المعتمدين.',
    oneContactDesc: 'تتعامل مع مدير علاقات واحد من BulkFlex يقوم بالتنسيق عبر شبكتنا بالكامل. تحصل على خيارات متعدّدة وأسعار تنافسية وقدرة استيعابية احتياطية عبر جهة اتصال احترافية واحدة.',
    armAsia: '02. ذراعك الممتدة في آسيا',
    armAsiaDesc: 'تعمل BulkFlex ميدانيًا في آسيا — زيارات حقيقية للمصانع، وفحص شخصي قبل الشحن، ومسؤولية مباشرة أمامك.',
    auditedFactories: '03. مصانع معتمدة — لا وجود للمجهول',
    auditedFactoriesDesc: 'اجتازت كل منشأة تصنيع في شبكتنا تدقيقًا هيكليًا يغطي القدرة الإنتاجية وأنظمة إدارة الجودة.',
    complianceBuilt: '04. التزام مدمج في النظام',
    complianceBuiltDesc: 'التوثيق وتتبع الدفعات وشهدات المنشأ وتقارير الفحص مدمجة في كل طلبية بشكل أساسي.',
    sopsFactory: '05. إجراءات تشغيل قياسية خاصة بالمشتري',
    sopsFactoryDesc: 'تطبيق معايير التغليف والمواصفات الخاصة بك على مستوى المصنع كإجراءات تشغيل قياسية لضمان الجودة الدائمة.',
    endToEnd: '06. إدارة التوريد من البداية للنهاية',
    endToEndDesc: 'إدارة كاملة من مراجعة المواصفات واختيار المصنع وحتى الفحص النهائي والشحن بالحاويات.',

    // Common CTAs & Buttons
    consultation: 'بدء استشارة التوريد',
    exploreProducts: 'استكشاف المنتجات',
    contactSales: 'الاتصال بفريق المبيعات',
    downloadPdf: 'تحميل ملف المواصفات PDF',

    // Footer & Miscellaneous
    footerDesc: 'شريكك الموثوق للتغليف المرن والحلول اللوجستية. بناء العلاقات وتقديم القيمة في كل حاوية.',
    footerRights: 'جميع الحقوق محفوظة.',
    quickNav: 'التنقل السريع',
    globalHubs: 'المراكز العالمية',
    contactHq: 'المقر الرئيسي'
  }
};

export const languages = [
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'AR', name: 'العربية', flag: '🇦🇪' }
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('bulkflex_lang') || 'EN';
  });

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem('bulkflex_lang', code);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['EN'][key] || key;
  };

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    if (language === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language.toLowerCase();
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, currentLangObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
