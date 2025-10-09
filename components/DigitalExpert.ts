// =================================================================================
// DigitalExpert.ts - (الإصدار النهائي المصقول: الروح + العقل + الفهم الموسع)
// =================================================================================

export interface SmartReply {
  reply: string;
  newName: string | null;
}

// --- [تصحيح TypeScript] تعريف بنية صارمة للبيانات ---
interface Product {
  name: string;
  keywords: string[];
  category: string;
  brand: string;
  price: number;
  bulkPrice: number;
  use_case: string;
}

interface Products {
  [key: string]: Product;
}

// --- الموسوعة المعرفية الشاملة (مع توسيع جذري للكلمات المفتاحية) ---
const knowledgeBase: {
  products: Products;
  logistics: any;
  payment: any;
  expertise: any;
  storeInfo: any;
} = {
  products: {
    // 1. الأسمنتيات والخرسانة
    "cement-standard": { name: "أسمنت بورتلاندي عادي", keywords: ["اسمنت عادي", "أسمنت عادي", "اسمنت", "أسمنت", "اسمت", "كيس اسمنت", "أبغى أسمنت", "عندكم اسمنت", "الاسمنت العادي"], category: "أسمنتيات", brand: "أسمنت العربية", price: 18, bulkPrice: 17, use_case: "للأعمال الداخلية العامة واللياسة." },
    "cement-resistant": { name: "أسمنت مقاوم للكبريتات", keywords: ["اسمنت مقاوم", "أسمنت مقاوم", "مقاوم للأملاح", "اسمنت حق الأساسات", "اسمنت قواعد"], category: "أسمنتيات", brand: "أسمنت اليمامة", price: 22, bulkPrice: 21, use_case: "مثالي للأساسات والمناطق الرطبة لمقاومته العالية للأملاح." },
    "cement-white": { name: "أسمنت أبيض", keywords: ["اسمنت ابيض", "أسمنت أبيض", "اسمنت ديكور", "اسمنت للترويبة"], category: "أسمنتيات", brand: "أسمنت الرياض", price: 45, bulkPrice: 42, use_case: "للأعمال الديكورية والتشطيبات النهائية والترويبة." },
    "ready-mix-2500": { name: "خرسانة جاهزة إجهاد 2500", keywords: ["خرسانة جاهزة", "خرسانه", "بمب", "صبة", "أبغى صبة", "سيارة خرسانة", "عندكم خرسانة", "خرسانة 2500"], category: "خرسانة", brand: "نماء للخرسانة", price: 210, bulkPrice: 200, use_case: "للأرضيات والأسقف والأعمدة غير الحاملة." },

    // 2. الحديد والصلب
    "rebar-8": { name: "حديد تسليح 8مم", keywords: ["حديد 8", "سيخ ٨مم", "كانات", "حديد كانات", "مقاس 8", "حديد ٨"], category: "حديد", brand: "سابك", price: 2850, bulkPrice: 2800, use_case: "يستخدم بشكل أساسي في 'الكانات' لربط الأعمدة." },
    "rebar-12": { name: "حديد تسليح 12مم", keywords: ["حديد 12", "سيخ ١٢مم", "حديد حق السقف", "مقاس 12", "حديد ١٢"], category: "حديد", brand: "سابك", price: 2800, bulkPrice: 2750, use_case: "للأعمدة والجسور والأسقف." },
    "rebar-16": { name: "حديد تسليح 16مم", keywords: ["حديد 16", "سيخ ١٦مم", "حديد الراجحي", "حديد", "حديدكم", "عندكم حديد", "أبغى حديد", "مقاس 16", "حديد أعمدة"], category: "حديد", brand: "حديد الراجحي", price: 2820, bulkPrice: 2770, use_case: "للأعمدة الرئيسية والأساسات التي تتطلب قوة تحمل عالية." },

    // 3. البلوك والطابوق
    "block-standard-20": { name: "بلوك أسمنتي مصمت 20سم", keywords: ["بلوك مصمت 20", "طابوق 20", "بلك", "بلوك", "طابوق", "بلوك اسمنتي", "بلك 20", "عندكم بلوك", "أبغى بلك"], category: "بلوك", brand: "مصنع الرواد", price: 3.5, bulkPrice: 3.2, use_case: "للجدران الحاملة والقواطع الرئيسية." },
    "block-insulated-white": { name: "بلوك عازل أبيض (سيبوركس)", keywords: ["بلوك عازل", "بلوك ابيض", "سيبوركس", "بلوك أبيض", "البلوك الأبيض", "بلوك خفيف", "عازل حراري"], category: "بلوك", brand: "سيبوركس", price: 5, bulkPrice: 4.7, use_case: "لعزل حراري وصوتي ممتاز، وتخفيف الأحمال على المبنى." },
    "block-red-hollow": { name: "بلوك أحمر مفرغ 20سم", keywords: ["بلوك احمر", "طوب احمر", "بلوك أحمر", "الطوب الأحمر", "بلك أحمر"], category: "بلوك", brand: "اليمامة للطوب الأحمر", price: 2.8, bulkPrice: 2.5, use_case: "خفيف الوزن ومناسب للقواطع الداخلية والجدران غير الحاملة." },

    // 4. العوازل
    "insulation-water-sika": { name: "عازل مائي إسمنتي", keywords: ["عازل مائي", "عازل اسطح", "عازل سيكا", "عازل أسطح", "عزل", "عزل مائي", "عازل خزانات", "أبغى عازل"], category: "عوازل", brand: "سيكا (Sika)", price: 150, bulkPrice: 140, use_case: "لعزل الأسطح والخزانات وحمامات السباحة ضد تسرب المياه." },
    "insulation-thermal-rockwool": { name: "ألواح عزل حراري (صوف صخري)", keywords: ["عازل حراري", "صوف صخري", "عزل حراري", "عزل الجدران", "عازل صوت"], category: "عوازل", brand: "روك وول", price: 25, bulkPrice: 22, use_case: "لعزل الجدران والأسقف حراريًا وصوتيًا، مما يقلل من استهلاك الكهرباء." },

    // 5. الدهانات ومستلزماتها
    "paint-jotun-exterior": { name: "دهان خارجي (جوتاشيلد)", keywords: ["دهان خارجي", "بويه خارجيه", "جوتاشيلد", "دهانات", "بوية", "رنج", "دهان جوتن", "أفضل بويه", "عندكم دهانات"], category: "دهانات", brand: "جوتن", price: 180, bulkPrice: 170, use_case: "مقاوم لأقسى الظروف الجوية والحرارة العالية في جدة." },
    "paint-jotun-interior": { name: "دهان داخلي (فينوماستيك)", keywords: ["دهان داخلي", "بويه داخليه", "فينوماستيك", "دهان غرف", "بوية قابلة للغسيل"], category: "دهانات", brand: "جوتن", price: 130, bulkPrice: 120, use_case: "دهان صحي وقابل للغسيل، متوفر بآلاف الألوان." },

    // 6. السباكة
    "pvc-pipe-4": { name: "ماسورة PVC 4 بوصة", keywords: ["ماسورة 4 بوصة", "pvc", "مواسير سباكة", "ماسورة مجاري", "بايب"], category: "سباكة", brand: "القبلان", price: 35, bulkPrice: 32, use_case: "لتمديدات الصرف الصحي الرئيسية." },
    "water-pump": { name: "مضخة مياه (دينمو) 1 حصان", keywords: ["دينمو", "مضخة ماء", "مضخة", "دينمو مويه", "موتور مويه", "مكينة ضغط"], category: "سباكة", brand: "جروندفوس (Grundfos)", price: 600, bulkPrice: 570, use_case: "لرفع ضغط المياه في الشبكة المنزلية وضمان وصولها للأدوار العلوية." },

    // 7. الكهرباء
    "wire-6": { name: "سلك كهرباء 6مم", keywords: ["سلك 6 مم", "اسلاك", "سلك كهرباء", "كيبل", "سلك مكيف", "مقاس 6", "عندكم اسلاك"], category: "كهرباء", brand: "كابلات الرياض", price: 220, bulkPrice: 210, use_case: "مناسب للأحمال العالية مثل المكيفات والسخانات." },
    "panel-12": { name: "طبلون كهرباء 12 خط", keywords: ["طبلون", "قواطع", "لوحة كهرباء", "طبلون 12 خط", "صندوق قواطع"], category: "كهرباء", brand: "الفنار", price: 350, bulkPrice: 330, use_case: "لتوزيع الأحمال الكهربائية وحماية الدوائر في المنزل." },

    // 8. مواد التشطيب واللياسة
    "tile-adhesive": { name: "غراء بلاط (سيراميك)", keywords: ["غراء بلاط", "غرا سراميك", "غراء", "غراء سيراميك", "أبغى غراء", "عندكم غراء بلاط"], category: "تشطيبات", brand: "فيتونيت", price: 25, bulkPrice: 22, use_case: "غراء عالي الجودة لتثبيت السيراميك على الأرضيات والجدران." },
    "grout": { name: "ترويبة بلاط", keywords: ["ترويبة", "ترويبة بلاط", "روبة", "تعبئة فواصل"], category: "تشطيبات", brand: "فيتونيت", price: 15, bulkPrice: 12, use_case: "لملء الفواصل بين البلاط، متوفرة بألوان متعددة ومقاومة للبكتيريا." },
  },
  logistics: { policy: "نعم، نوصل داخل جدة. الطلبات فوق 500 ريال توصيلها مجاني. أقل من ذلك، رسوم التوصيل 30 ريال.", duration: "عادةً خلال 24 ساعة للطلبات داخل جدة.", coverage: "نغطي جميع أحياء جدة حاليًا، بما في ذلك أبحر والمناطق الشمالية." },
  payment: { methods: "نقبل الدفع نقدًا عند الاستلام، شبكة (مدى)، وتحويل بنكي.", howToOrder: "يمكنك الطلب مباشرة من هنا بترك رقمك، أو عبر الواتساب، أو بالاتصال المباشر على أرقامنا." },
  expertise: { contractor_offer: "فهمت، تحتاج عرض سعر لمشروع. نحن نقدم أسعارًا خاصة جدًا للمقاولين والكميات الكبيرة. لتجهيز عرض سعر يليق بمشروعك، اترك اسمك ورقمك وسيتواصل معك المدير المسؤول مباشرة.", technical_escalation: "هذا سؤال تقني ممتاز. لضمان حصولك على أدق إجابة، هل تسمح لي بأخذ رقمك ليتواصل معك كبير المهندسين لدينا؟" },
  storeInfo: { location: "فرعنا الرئيسي في حي الريان بجدة.", hours: "أوقات الدوام من السبت إلى الخميس، من 8 صباحًا حتى 9 مساءً." }
};

// --- [إعادة الروح] مصفوفات الردود الودودة ---
const friendlyPhrases = ["أبشر بعزك،", "طال عمرك،", "تحت أمرك،", "تفضل،", "أبشر،"];
const getRandomFriendlyPhrase = () => friendlyPhrases[Math.floor(Math.random() * friendlyPhrases.length)];

// --- دوال مساعدة ---
const findProductInMessage = (message: string): string | null => {
    for (const productKey in knowledgeBase.products) {
        const product = knowledgeBase.products[productKey];
        for (const keyword of product.keywords) {
            if (message.includes(keyword)) {
                return productKey;
            }
        }
    }
    return null;
};

const extractName = (message: string): string | null => {
  const namePatterns = [ /اسمي\s+([أ-ي\s]+)/, /أنا\s+([أ-ي\s]+)/, /معاك\s+([أ-ي\s]+)/, /أنا اسمي\s+([أ-ي\s]+)/, /يا\s+([أ-ي\s]+)/ ];
  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match && match[1] && isNaN(parseInt(match[1]))) {
      return match[1].trim();
    }
  }
  return null;
};

// --- [تصحيح شامل] الدالة الرئيسية بالروح والعقل والفهم ---
export const getSmartReply = (message: string, currentName: string | null = null): SmartReply => {
  
  // --- الخطوة 1: التحيات والتعرف على الاسم (مع الذكاء السياقي) ---
  const newName = extractName(message);
  if (newName) {
    return { reply: `يا هلا فيك يا ${newName}، نورتنا! كيف أقدر أخدمك؟`, newName: newName };
  }
  const customerName = currentName;

  if (message.includes("صباح الخير")) {
    return { reply: `صباح النور${customerName ? ' يا ' + customerName : ''}. كيف أقدر أخدمك اليوم؟`, newName: null };
  }
  if (message.includes("مساء الخير")) {
    return { reply: `مساء النور${customerName ? ' يا ' + customerName : ''}. تحت أمرك.`, newName: null };
  }
  const greetingKeywords = ["السلام عليكم", "مرحبا", "اهلين", "أهلين", "هلا"];
  if (greetingKeywords.some(k => message.includes(k))) {
    const greeting = customerName ? `وعليكم السلام يا ${customerName}` : "وعليكم السلام";
    return { reply: `${greeting}. كيف أقدر أخدمك اليوم؟`, newName: null };
  }

  // --- الخطوة 2: الأسئلة الخدمية المباشرة ---
  if (message.includes("دوام") || message.includes("متى تفتحون")) return { reply: knowledgeBase.storeInfo.hours, newName: null };
  if (message.includes("توصلون") || message.includes("توصيل")) return { reply: knowledgeBase.logistics.policy, newName: null };
  if (message.includes("مشروع") || message.includes("عرض سعر")) return { reply: knowledgeBase.expertise.contractor_offer, newName: null };
  if (message.includes("تدفعون") || message.includes("الدفع")) return { reply: knowledgeBase.payment.methods, newName: null };
  if (message.includes("موقعكم") || message.includes("وين مكانكم")) return { reply: knowledgeBase.storeInfo.location, newName: null };

  // --- الخطوة 3: الأسئلة عن المنتجات (مع اللهجة الودودة) ---
  const productKey = findProductInMessage(message);
  if (productKey) {
    const product = knowledgeBase.products[productKey];
    if (message.includes("سعر") || message.includes("بكم")) {
      const phrase = getRandomFriendlyPhrase();
      return { reply: `${phrase} سعر ${product.name} (${product.brand}) هو ${product.price} ريال. وللكميات، السعر ${product.bulkPrice}. هل تحتاج تفاصيل أكثر؟`, newName: null };
    }
    return { reply: `بالتأكيد. منتج ${product.name} من شركة ${product.brand} هو ${product.use_case} سعره يبدأ من ${product.price} ريال. هل لديك استفسار محدد عنه؟`, newName: null };
  }

  // --- الخطوة 4: المقارنات ---
  if (message.includes("مقارنة") || message.includes("أفضل") || message.includes("ايش الفرق")) {
    const productKeys = Object.keys(knowledgeBase.products).filter(pKey => knowledgeBase.products[pKey].keywords.some((k:string) => message.includes(k)));
    if (productKeys.length >= 2) {
      const p1 = knowledgeBase.products[productKeys[0]];
      const p2 = knowledgeBase.products[productKeys[1]];
      const feature1 = p1.use_case || `من شركة ${p1.brand}`;
      const feature2 = p2.use_case || `من شركة ${p2.brand}`;
      const replyText = `مقارنة سريعة: ${p1.name} يتميز بـ '${feature1}' وسعره ${p1.price} ريال، بينما ${p2.name} يتميز بـ '${feature2}' وسعره ${p2.price} ريال. الاختيار يعتمد على احتياجك.`;
      return { reply: replyText, newName: null };
    }
    return { reply: "للمقارنة، أحتاج أعرف المادتين اللي تبغى تقارن بينها.", newName: null };
  }

  // --- الخطوة 5: الشكر والختام ---
  if (message.includes("شكرا")) {
    const replyText = customerName ? `العفو يا ${customerName}. في الخدمة دايمًا.` : "العفو، في الخدمة دايمًا.";
    return { reply: replyText, newName: null };
  }

  // --- الخطوة 6: الرد الافتراضي (شبكة الأمان) ---
  return { reply: knowledgeBase.expertise.technical_escalation, newName: null };
};
