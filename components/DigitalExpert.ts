// =================================================================================
// DigitalExpert.ts - (النسخة الختامية النهائية مع تصحيح TypeScript)
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

// --- الموسوعة المعرفية الشاملة (عقل الخبير) ---
// تم تطبيق النوع الجديد هنا لضمان سلامة الكود
const knowledgeBase: {
  products: Products;
  logistics: any;
  payment: any;
  expertise: any;
  storeInfo: any;
} = {
  // 1. المنتجات (القائمة الموسعة بالكامل)
  products: {
    "cement-standard": { name: "أسمنت بورتلاندي عادي", keywords: ["اسمنت عادي"], category: "أسمنتيات", brand: "أسمنت العربية", price: 18, bulkPrice: 17, use_case: "للأعمال الداخلية العامة واللياسة." },
    "cement-resistant": { name: "أسمنت مقاوم للكبريتات", keywords: ["اسمنت مقاوم"], category: "أسمنتيات", brand: "أسمنت اليمامة", price: 22, bulkPrice: 21, use_case: "مثالي للأساسات والمناطق الرطبة لمقاومته العالية للأملاح." },
    "cement-white": { name: "أسمنت أبيض", keywords: ["اسمنت ابيض"], category: "أسمنتيات", brand: "أسمنت الرياض", price: 45, bulkPrice: 42, use_case: "للأعمال الديكورية والتشطيبات النهائية والترويبة." },
    "ready-mix-2500": { name: "خرسانة جاهزة إجهاد 2500", keywords: ["خرسانة جاهزة", "بمب"], category: "خرسانة", brand: "نماء للخرسانة", price: 210, bulkPrice: 200, use_case: "للأرضيات والأسقف والأعمدة غير الحاملة." },
    "rebar-8": { name: "حديد تسليح 8مم", keywords: ["حديد 8", "كانات"], category: "حديد", brand: "سابك", price: 2850, bulkPrice: 2800, use_case: "يستخدم بشكل أساسي في 'الكانات' لربط الأعمدة." },
    "rebar-10": { name: "حديد تسليح 10مم", keywords: ["حديد 10"], category: "حديد", brand: "سابك", price: 2830, bulkPrice: 2780, use_case: "للأسقف والجسور الثانوية." },
    "rebar-12": { name: "حديد تسليح 12مم", keywords: ["حديد 12"], category: "حديد", brand: "سابك", price: 2800, bulkPrice: 2750, use_case: "للأعمدة والجسور والأسقف." },
    "rebar-14": { name: "حديد تسليح 14مم", keywords: ["حديد 14"], category: "حديد", brand: "حديد الراجحي", price: 2810, bulkPrice: 2760, use_case: "للأعمدة والجسور متوسطة الحجم." },
    "rebar-16": { name: "حديد تسليح 16مم", keywords: ["حديد 16"], category: "حديد", brand: "حديد الراجحي", price: 2820, bulkPrice: 2770, use_case: "للأعمدة الرئيسية والأساسات التي تتطلب قوة تحمل عالية." },
    "rebar-18": { name: "حديد تسليح 18مم", keywords: ["حديد 18"], category: "حديد", brand: "حديد الراجحي", price: 2840, bulkPrice: 2790, use_case: "للأساسات الكبيرة والمشاريع الضخمة." },
    "block-standard-20": { name: "بلوك أسمنتي مصمت 20سم", keywords: ["بلوك مصمت 20", "طابوق 20"], category: "بلوك", brand: "مصنع الرواد", price: 3.5, bulkPrice: 3.2, use_case: "للجدران الحاملة والقواطع الرئيسية." },
    "block-standard-15": { name: "بلوك أسمنتي مصمت 15سم", keywords: ["بلوك 15"], category: "بلوك", brand: "مصنع الرواد", price: 3.1, bulkPrice: 2.8, use_case: "للقواطع الداخلية غير الحاملة." },
    "block-insulated-white": { name: "بلوك عازل أبيض (سيبوركس) 20سم", keywords: ["بلوك عازل", "بلوك ابيض", "سيبوركس"], category: "بلوك", brand: "سيبوركس", price: 5, bulkPrice: 4.7, use_case: "لعزل حراري وصوتي ممتاز، وتخفيف الأحمال على المبنى." },
    "block-red-hollow": { name: "بلوك أحمر مفرغ 20سم", keywords: ["بلوك احمر", "طوب احمر"], category: "بلوك", brand: "اليمامة للطوب الأحمر", price: 2.8, bulkPrice: 2.5, use_case: "خفيف الوزن ومناسب للقواطع الداخلية والجدران غير الحاملة." },
    "insulation-water-sika": { name: "عازل مائي إسمنتي (سيكاتوب سيل 107)", keywords: ["عازل مائي", "عازل اسطح", "عازل سيكا"], category: "عوازل", brand: "سيكا (Sika)", price: 150, bulkPrice: 140, use_case: "لعزل الأسطح والخزانات وحمامات السباحة ضد تسرب المياه." },
    "insulation-thermal-rockwool": { name: "ألواح عزل حراري (صوف صخري)", keywords: ["عازل حراري", "صوف صخري"], category: "عوازل", brand: "روك وول", price: 25, bulkPrice: 22, use_case: "لعزل الجدران والأسقف حراريًا، مما يقلل من استهلاك الكهرباء." },
    "insulation-bitumen-roll": { name: "لفائف بيتومين (بحص) 4مم", keywords: ["رولات عزل", "بيتومين"], category: "عوازل", brand: "انسوتك", price: 90, bulkPrice: 85, use_case: "طبقة عزل مائي أولية للأسطح قبل التبليط." },
    "insulation-foam-board": { name: "ألواح فوم أزرق (بوليسترين)", keywords: ["فوم ازرق", "عازل فوم"], category: "عوازل", brand: "داو (Dow)", price: 30, bulkPrice: 27, use_case: "عزل حراري عالي الكفاءة للجدران والأرضيات والأسطح." },
    "paint-jotun-exterior": { name: "دهان خارجي (جوتاشيلد)", keywords: ["دهان خارجي", "بويه خارجيه", "جوتاشيلد"], category: "دهانات", brand: "جوتن", price: 180, bulkPrice: 170, use_case: "مقاوم لأقسى الظروف الجوية والحرارة العالية في جدة." },
    "paint-jotun-interior": { name: "دهان داخلي (فينوماستيك)", keywords: ["دهان داخلي", "بويه داخليه", "فينوماستيك"], category: "دهانات", brand: "جوتن", price: 130, bulkPrice: 120, use_case: "دهان صحي وقابل للغسيل، متوفر بآلاف الألوان." },
    "paint-base-sealer": { name: "أساس (سيلر) مائي", keywords: ["اساس", "سيلر"], category: "دهانات", brand: "جوتن", price: 95, bulkPrice: 90, use_case: "يطبق قبل الدهان لزيادة الالتصاق وتوحيد امتصاص السطح." },
    "paint-putty": { name: "معجون جدران", keywords: ["معجون"], category: "دهانات", brand: "سافيتو", price: 40, bulkPrice: 35, use_case: "لتسوية وتنعيم الجدران قبل تطبيق طبقة الأساس والدهان." },
    "paint-thinner": { name: "تنر", keywords: ["تنر"], category: "دهانات", brand: "أورينت", price: 25, bulkPrice: 20, use_case: "لتخفيف الدهانات الزيتية وتنظيف الأدوات." },
    "pvc-pipe-4": { name: "ماسورة PVC 4 بوصة", keywords: ["ماسورة 4 بوصة", "pvc"], category: "سباكة", brand: "القبلان", price: 35, bulkPrice: 32, use_case: "لتمديدات الصرف الصحي الرئيسية." },
    "pvc-pipe-2": { name: "ماسورة PVC 2 بوصة", keywords: ["ماسورة 2 بوصة"], category: "سباكة", brand: "القبلان", price: 20, bulkPrice: 18, use_case: "لتمديدات الصرف الفرعية للمغاسل والمطابخ." },
    "ppr-pipe-hot": { name: "ماسورة PPR حراري 3/4 بوصة", keywords: ["مواسير حراري", "ppr"], category: "سباكة", brand: "تحويل", price: 25, bulkPrice: 22, use_case: "لتمديدات المياه الحارة والباردة داخل الجدران." },
    "water-tank-1000": { name: "خزان مياه علوي 1000 لتر", keywords: ["خزان مويه", "خزان فيبر"], category: "سباكة", brand: "الزامل", price: 550, bulkPrice: 520, use_case: "لتخزين المياه أعلى أسطح المباني، مصنوع من 4 طبقات للحماية." },
    "water-pump": { name: "مضخة مياه (دينمو) 1 حصان", keywords: ["دينمو", "مضخة ماء"], category: "سباكة", brand: "جروندفوس (Grundfos)", price: 600, bulkPrice: 570, use_case: "لرفع ضغط المياه في الشبكة المنزلية وضمان وصولها للأدوار العلوية." },
    "faucet-mixer": { name: "خلاط مغسلة", keywords: ["خلاط"], category: "سباكة", brand: "جروهي (Grohe)", price: 350, bulkPrice: 330, use_case: "خلاط ألماني عالي الجودة للمغاسل، يوفر في استهلاك المياه." },
    "conduit-20": { name: "لي (جرجور) كهرباء 20مم", keywords: ["لي كهرباء", "جرجور"], category: "كهرباء", brand: "أنابيب السعودية", price: 15, bulkPrice: 13, use_case: "لحماية أسلاك الكهرباء داخل الجدران والأسقف." },
    "wire-4": { name: "سلك كهرباء 4مم", keywords: ["سلك 4 مم"], category: "كهرباء", brand: "كابلات الرياض", price: 180, bulkPrice: 170, use_case: "للإنارة والمقابس (الأفياش) العادية." },
    "wire-6": { name: "سلك كهرباء 6مم", keywords: ["سلك 6 مم", "اسلاك"], category: "كهرباء", brand: "كابلات الرياض", price: 220, bulkPrice: 210, use_case: "مناسب للأحمال العالية مثل المكيفات والسخانات." },
    "panel-12": { name: "طبلون كهرباء 12 خط", keywords: ["طبلون", "قواطع"], category: "كهرباء", brand: "الفنار", price: 350, bulkPrice: 330, use_case: "لتوزيع الأحمال الكهربائية وحماية الدوائر في المنزل." },
    "socket-switch": { name: "مفتاح كهرباء / فيش", keywords: ["مفتاح", "فيش"], category: "كهرباء", brand: "باناسونيك", price: 15, bulkPrice: 13, use_case: "مفاتيح وأفياش عالية الجودة بتصميم عصري." },
    "led-light": { name: "لمبة ليد (LED) 12 واط", keywords: ["لمبة ليد"], category: "كهرباء", brand: "فيليبس", price: 20, bulkPrice: 18, use_case: "إضاءة قوية وموفرة للطاقة بعمر افتراضي طويل." },
    "plaster-sand": { name: "رمل أبيض (لياسة)", keywords: ["رمل ابيض", "بطحاء"], category: "تشطيبات", brand: "محجرنا الخاص", price: 120, bulkPrice: 110, use_case: "رمل مغسول ونظيف مخصص لأعمال اللياسة والتشطيبات." },
    "plaster-mesh": { name: "شبك لياسة فايبر", keywords: ["شبك لياسة"], category: "تشطيبات", brand: "صناعة ألمانية", price: 30, bulkPrice: 25, use_case: "يوضع عند فواصل البناء وبين الأعمدة والبلوك لمنع التشققات المستقبلية." },
    "tile-adhesive": { name: "غراء بلاط (سيراميك)", keywords: ["غراء بلاط", "غرا سراميك"], category: "تشطيبات", brand: "فيتونيت", price: 25, bulkPrice: 22, use_case: "غراء عالي الجودة لتثبيت السيراميك على الأرضيات والجدران." },
    "porcelain-adhesive": { name: "غراء بورسلان", keywords: ["غراء بورسلان"], category: "تشطيبات", brand: "فيتونيت", price: 45, bulkPrice: 40, use_case: "غراء مخصص للبورسلان والأحجام الكبيرة، يتميز بقوة التصاق فائقة." },
    "grout": { name: "ترويبة بلاط", keywords: ["ترويبة"], category: "تشطيبات", brand: "فيتونيت", price: 15, bulkPrice: 12, use_case: "لملء الفواصل بين البلاط، متوفرة بألوان متعددة ومقاومة للبكتيريا." },
    "silicone-sealant": { name: "سيليكون", keywords: ["سيليكون"], category: "تشطيبات", brand: "ويكر", price: 20, bulkPrice: 18, use_case: "لإغلاق الفواصل حول المغاسل والأبواب والنوافذ، مقاوم للماء والرطوبة." },
    "power-drill": { name: "دريل كهربائي", keywords: ["دريل", "شنيور"], category: "أدوات", brand: "بوش (Bosch)", price: 250, bulkPrice: 230, use_case: "لأعمال الثقب في الخرسانة والخشب والمعدن." },
    "angle-grinder": { name: "صاروخ (جلخ) 4.5 بوصة", keywords: ["صاروخ", "جلخ"], category: "أدوات", brand: "ماكيتا (Makita)", price: 300, bulkPrice: 280, use_case: "لقطع وقص الحديد والمعادن وجلخ الأسطح." },
    "measuring-tape": { name: "شريط قياس (متر) 5 متر", keywords: ["متر"], category: "أدوات", brand: "ستانلي", price: 35, bulkPrice: 30, use_case: "لأخذ القياسات الدقيقة في الموقع." },
    "wheelbarrow": { name: "عربية (برويطة)", keywords: ["عربية", "برويطة"], category: "أدوات", brand: "صناعة وطنية", price: 150, bulkPrice: 140, use_case: "لنقل المواد مثل الرمل والأسمنت داخل موقع العمل." },
  },

  // 2. خدمات التوصيل والخدمات اللوجستية
  logistics: {
    policy: "نعم، نوصل داخل جدة. الطلبات فوق 500 ريال توصيلها مجاني. أقل من ذلك، رسوم التوصيل 30 ريال.",
    duration: "عادةً خلال 24 ساعة للطلبات داخل جدة.",
    coverage: "نغطي جميع أحياء جدة حاليًا، بما في ذلك أبحر والمناطق الشمالية."
  },

  // 3. سياسات الدفع والطلبات
  payment: {
    methods: "نقبل الدفع نقدًا عند الاستلام، شبكة (مدى)، وتحويل بنكي.",
    howToOrder: "يمكنك الطلب مباشرة من هنا بترك رقمك، أو عبر الواتساب، أو بالاتصال المباشر على أرقامنا."
  },

  // 4. الخبرة الفنية والمشورة
  expertise: {
    contractor_offer: "فهمت، تحتاج عرض سعر لمشروع. نحن نقدم أسعارًا خاصة جدًا للمقاولين والكميات الكبيرة. لتجهيز عرض سعر يليق بمشروعك، اترك اسمك ورقمك وسيتواصل معك المدير المسؤول مباشرة.",
    technical_escalation: "هذا سؤال تقني ممتاز. لضمان حصولك على أدق إجابة، هل تسمح لي بأخذ رقمك ليتواصل معك كبير المهندسين لدينا؟"
  },

  // 5. معلومات المتجر
  storeInfo: {
    location: "فرعنا الرئيسي في حي الريان بجدة.",
    hours: "أوقات الدوام من السبت إلى الخميس، من 8 صباحًا حتى 9 مساءً."
  }
};

// --- دوال مساعدة ---
const findProductInMessage = (message: string): string | null => {
    const lowerCaseMessage = message.toLowerCase();
    // السطر 92 الذي كان به الخطأ
    for (const productKey in knowledgeBase.products) {
        const product = knowledgeBase.products[productKey];
        for (const keyword of product.keywords) {
            if (lowerCaseMessage.includes(keyword)) {
                return productKey;
            }
        }
    }
    return null;
};

const extractName = (message: string): string | null => {
  const namePatterns = [ /اسمي\s+([أ-ي]+)/, /أنا\s+([أ-ي]+)/, /معاك\s+([أ-ي]+)/, /أنا اسمي\s+([أ-ي]+)/ ];
  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

// --- الدالة الرئيسية: الخبير الرقمي ---
export const getSmartReply = (message: string, currentName: string | null = null): SmartReply => {
  const lowerCaseMessage = message.toLowerCase();
  let newName = extractName(message);
  const customerName = newName || currentName;

  // 1. التعامل مع الأسئلة العامة والخدمات
  if (lowerCaseMessage.includes("دوام") || lowerCaseMessage.includes("متى تفتحون")) return { reply: knowledgeBase.storeInfo.hours, newName: null };
  if (lowerCaseMessage.includes("توصلون") || lowerCaseMessage.includes("توصيل")) return { reply: knowledgeBase.logistics.policy, newName: null };
  if (lowerCaseMessage.includes("مشروع") || lowerCaseMessage.includes("عرض سعر")) return { reply: knowledgeBase.expertise.contractor_offer, newName: null };
  if (lowerCaseMessage.includes("تدفعون") || lowerCaseMessage.includes("الدفع")) return { reply: knowledgeBase.payment.methods, newName: null };
  if (lowerCaseMessage.includes("موقعكم") || lowerCaseMessage.includes("وين مكانكم")) return { reply: knowledgeBase.storeInfo.location, newName: null };

  // 2. التحيات والتعرف على الاسم
  if (newName) {
    return { reply: `يا هلا فيك يا ${newName}، نورتنا! كيف أقدر أخدمك؟`, newName: newName };
  }
  if (lowerCaseMessage.includes("السلام عليكم") || lowerCaseMessage.includes("مرحبا")) {
    const greeting = customerName ? `وعليكم السلام يا ${customerName}` : "وعليكم السلام";
    return { reply: `${greeting}. كيف أقدر أخدمك اليوم؟`, newName: null };
  }

  // 3. التعامل مع المنتجات
  const productKey = findProductInMessage(lowerCaseMessage);

  if (productKey) {
    const product = knowledgeBase.products[productKey];
    if (lowerCaseMessage.includes("سعر") || lowerCaseMessage.includes("بكم")) {
      return { reply: `سعر ${product.name} (${product.brand}) هو ${product.price} ريال. وللكميات، السعر ${product.bulkPrice}. هل تحتاج تفاصيل أكثر؟`, newName: null };
    }
    return { reply: `بالتأكيد. منتج ${product.name} من شركة ${product.brand} هو ${product.use_case} سعره يبدأ من ${product.price} ريال. هل لديك استفسار محدد عنه؟`, newName: null };
  }

  // 4. المقارنات
  if (lowerCaseMessage.includes("مقارنة") || lowerCaseMessage.includes("أفضل") || lowerCaseMessage.includes("ايش الفرق")) {
    const productKeys = Object.keys(knowledgeBase.products).filter(pKey => knowledgeBase.products[pKey].keywords.some(k => lowerCaseMessage.includes(k)));
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

  // 5. الشكر والختام
  if (lowerCaseMessage.includes("شكرا")) {
    const replyText = customerName ? `العفو يا ${customerName}. في الخدمة دايمًا.` : "العفو، في الخدمة دايمًا.";
    return { reply: replyText, newName: null };
  }

  // 6. الرد الافتراضي
  return { reply: knowledgeBase.expertise.technical_escalation, newName: null };
};
