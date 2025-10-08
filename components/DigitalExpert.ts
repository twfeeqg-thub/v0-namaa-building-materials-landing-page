// =================================================================================
// DigitalExpert.ts - الخبير الرقمي لمتجر نماء لمواد البناء (الإصدار 3.0)
// =================================================================================

export interface SmartReply {
  reply: string;
  newName: string | null;
}

// --- قاعدة بيانات المنتجات (مُوسَّعة) ---
const products: { [key: string]: any } = {
  "اسمنت": {
    name: "أسمنت مقاوم",
    description: "أسمنت بورتلاندي عالي الجودة، مثالي لجميع أنواع الإنشاءات الخرسانية.",
    price: 20,
    bulkPrice: 18,
    technical: { "قوة الضغط": "52.5 نيوتن/مم²", "الاستخدام": "الأعمدة والأساسات", "مقاومة الكبريتات": "عالية" }
  },
  "حديد تسليح": {
    name: "حديد تسليح (سابك)",
    description: "حديد تسليح عالي المتانة مطابق للمواصفات السعودية.",
    price: 2800,
    bulkPrice: 2750,
    technical: { "القطر": "متوفر من 8مم إلى 32مم", "قوة الشد": "600 نيوتن/مم²", "الشركة المصنعة": "سابك" }
  },
  "بلوك": {
    name: "بلوك أسمنتي",
    description: "بلوك أسمنتي مصمت ومعزول للبناء والجدران.",
    price: 3,
    bulkPrice: 2.7,
    technical: { "الأبعاد": "20x20x40 سم", "العزل": "متوفر نوع معزول بالبوليسترين", "الكثافة": "1200 كجم/م³" }
  },
  "رمل": {
    name: "رمل أبيض (نظيف)",
    description: "رمل أبيض نظيف ومغسول، مناسب لأعمال اللياسة والخلطات.",
    price: 120,
    bulkPrice: 110,
    technical: { "نوع المعالجة": "مغسول ونظيف", "الشوائب": "أقل من 2%", "مناسب لـ": "اللياسة، الخرسانة، الدفان" }
  },
  "خرسانة جاهزة": {
    name: "خرسانة جاهزة",
    description: "خرسانة جاهزة حسب الطلب لمختلف إجهادات الضغط.",
    price: 210,
    bulkPrice: 200,
    technical: { "الإجهاد": "متوفر من 2500 إلى 7000 psi", "التسليم": "عبر مضخات حديثة", "الاعتماد": "معتمدة من البلديات" }
  }
};

// --- دوال مساعدة ---
const findProductInMessage = (message: string): string | null => {
  const lowerCaseMessage = message.toLowerCase();
  for (const productKey in products) {
    if (lowerCaseMessage.includes(productKey)) {
      return productKey;
    }
  }
  return null;
};

const extractName = (message: string): string | null => {
  const namePatterns = [
    /اسمي\s+([أ-ي]+)/,
    /أنا\s+([أ-ي]+)/,
    /معاك\s+([أ-ي]+)/,
    /أنا اسمي\s+([أ-ي]+)/
  ];
  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match && match) {
      return match;
    }
  }
  return null;
};

// --- الدالة الرئيسية: الخبير الرقمي ---
export const getSmartReply = (message: string, currentName: string | null = null): SmartReply => {
  const lowerCaseMessage = message.toLowerCase();
  let newName = extractName(message);
  const customerName = newName || currentName;

  if (newName) {
    return { reply: `يا هلا فيك يا ${newName}، نورتنا! كيف أقدر أخدمك؟`, newName: newName };
  }
  if (lowerCaseMessage.includes("السلام عليكم") || lowerCaseMessage.includes("مرحبا")) {
    const greeting = customerName ? `وعليكم السلام يا ${customerName}` : "وعليكم السلام";
    return { reply: `${greeting}. كيف أقدر أخدمك اليوم؟`, newName: null };
  }

  if (lowerCaseMessage.includes("سعر") || lowerCaseMessage.includes("بكم")) {
    const productKey = findProductInMessage(lowerCaseMessage);
    if (productKey) {
      const product = products[productKey];
      return {
        reply: `سعر ${product.name} هو ${product.price} ريال. وبالنسبة للكميات الكبيرة، السعر يكون ${product.bulkPrice} ريال. هل تحتاج تفاصيل أكثر؟`,
        newName: null
      };
    }
    return { reply: "ياليت تحدد لي المادة اللي تسأل عن سعرها عشان أقدر أفيدك.", newName: null };
  }

  if (lowerCaseMessage.includes("مقارنة") || lowerCaseMessage.includes("أفضل") || lowerCaseMessage.includes("ايش الفرق")) {
    const productKeys = Object.keys(products).filter(p => lowerCaseMessage.includes(p));
    if (productKeys.length >= 2) {
      const p1 = products[productKeys];
      const p2 = products[productKeys];
      // [تصحيح] استخدام علامات التنصيص الفردية بدلاً من المزدوجة
      return {
        reply: `مقارنة سريعة: ${p1.name} يتميز بـ '${p1.technical.الاستخدام || p1.technical.الشركة المصنعة}' وسعره ${p1.price} ريال، بينما ${p2.name} يتميز بـ '${p2.technical.الاستخدام || p2.technical.الشركة المصنعة}' وسعره ${p2.price} ريال. الاختيار يعتمد على احتياجك.`,
        newName: null
      };
    }
    return { reply: "للمقارنة، أحتاج أعرف المادتين اللي تبغى تقارن بينها.", newName: null };
  }

  const productKey = findProductInMessage(lowerCaseMessage);
  if (productKey) {
    const product = products[productKey];
    return {
      reply: `بالتأكيد. ${product.description} وسعره يبدأ من ${product.price} ريال. هل عندك أي استفسار فني عنه؟`,
      newName: null
    };
  }

  if (lowerCaseMessage.includes("شكرا")) {
    const replyText = customerName ? `العفو يا ${customerName}. في الخدمة دايمًا.` : "العفو، في الخدمة دايمًا.";
    return { reply: replyText, newName: null };
  }

  const fallbackReplies = [
    "معليش، ما فهمت عليك. ممكن توضح سؤالك؟",
    "العذر منك، هذي خارج نطاق معرفتي حاليًا. هل فيه سؤال ثاني عن مواد البناء؟",
    "أنا متخصص في مواد البناء زي الأسمنت والحديد والبلوك. كيف أقدر أخدمك فيها؟"
  ];
  const randomReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
  return { reply: randomReply, newName: null };
};
