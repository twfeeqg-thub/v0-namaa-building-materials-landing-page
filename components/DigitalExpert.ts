// ==================================================================
// العقل المفكر: الخبير الرقمي لمتجر نماء لمواد البناء (نسخة تجريبية)
// ==================================================================

// 1. قاعدة البيانات المعرفية (المعرفة الافتراضية)
// ----------------------------------------------------
const knowledgeBase = {
  // الكلمات المفتاحية والردود عليها
  greetings: {
    keywords: ["مرحبا", "السلام عليكم", "أهلا", "مساء الخير", "صباح الخير"],
    response: "أهلاً بك في متجر نماء لمواد البناء! أنا مساعدك الرقمي، كيف يمكنني خدمتك اليوم؟"
  },
  pricing: {
    keywords: ["سعر", "كم", "بكم", "أسعار"],
    // ردود ذكية تعتمد على المنتج المذكور
    getProductPrice: (product: string): string => {
      if (product.includes("اسمنت مقاوم")) return "سعر كيس الأسمنت المقاوم هو 18 ريال سعودي. هل ترغب في معرفة الكميات المتوفرة أو تكلفة التوصيل؟";
      if (product.includes("بلوك")) return "لدينا أنواع مختلفة من البلوك. البلوك الأسمنتي العادي مقاس 20 سم سعره 2.5 ريال للحبة. هل تبحث عن نوع أو مقاس معين؟";
      if (product.includes("حديد تسليح")) return "سعر طن حديد التسليح مقاس 16 ملم هو 2800 ريال. الأسعار قد تتغير قليلاً. هل أتحقق لك من سعر اليوم الدقيق؟";
      return "لمعرفة الأسعار بدقة، يرجى تحديد المنتج الذي تسأل عنه. مثلاً: 'كم سعر اسمنت مقاوم؟'";
    }
  },
  availability: {
    keywords: ["متوفر", "موجود", "عندكم"],
    response: "نعم، بفضل الله، معظم المنتجات الأساسية متوفرة بكميات جيدة. ما هو المنتج الذي تبحث عنه بالتحديد لأؤكد لك؟"
  },
  delivery: {
    keywords: ["توصيل", "شحن", "يوصل", "توصيلون"],
    response: "بالتأكيد، نوفر خدمة التوصيل داخل جدة. تبدأ رسوم التوصيل من 50 ريال وتعتمد على الكمية والمسافة. هل تود تزويدي بالطلب التقريبي والحي لأعطيك تكلفة أدق؟"
  },
  comparison: {
    keywords: ["أفضل", "ايش الفرق", "مقارنة"],
    response: "سؤال ممتاز! الأسمنت المقاوم مثالي للأساسات والأماكن الرطبة لمقاومته العالية للأملاح والكبريتات، بينما الأسمنت العادي (البورتلاندي) مناسب لمعظم أعمال البناء العامة. مشروعك في أي مرحلة حاليًا؟"
  },
  contact: {
    keywords: ["اتصل", "رقمكم", "التواصل", "واتساب"],
    response: "يسعدنا تواصلك معنا مباشرة! يمكنك الاتصال بنا على الرقم: 0562061338. هل لديك أي استفسار آخر يمكنني مساعدتك به الآن؟"
  },
  workingHours: {
    keywords: ["دوام", "متى تفتحون", "أوقات العمل", "مفتوحين"],
    response: "أوقات العمل الرسمية في الفرع هي من الساعة 8 صباحًا حتى 10 مساءً، طوال أيام الأسبوع ما عدا يوم الجمعة. ولكن أنا متوفر لخدمتك على مدار الساعة 24/7."
  },
  fallback: {
    // الرد الافتراضي في حال لم يتم فهم السؤال
    response: "عذراً، لم أفهم سؤالك بدقة. هل يمكنك إعادة صياغته؟ يمكنك أن تسألني عن الأسعار، التوافر، أو التوصيل."
  }
};

// 2. الدالة الرئيسية (العقل المعالج)
// ------------------------------------
export const getSmartReply = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase();

  // --- منطق معالجة الأسعار (الأكثر تعقيدًا) ---
  if (knowledgeBase.pricing.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.pricing.getProductPrice(lowerCaseMessage);
  }

  // --- منطق معالجة بقية الاستفسارات ---
  if (knowledgeBase.greetings.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.greetings.response;
  }
  if (knowledgeBase.availability.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.availability.response;
  }
  if (knowledgeBase.delivery.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.delivery.response;
  }
  if (knowledgeBase.comparison.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.comparison.response;
  }
  if (knowledgeBase.contact.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.contact.response;
  }
  if (knowledgeBase.workingHours.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.workingHours.response;
  }

  // --- الرد الافتراضي ---
  return knowledgeBase.fallback.response;
};
