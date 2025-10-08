// ==================================================================
// العقل المفكر: الخبير الرقمي لمتجر نماء (نسخة 2.0 - الخبير الحجازي)
// ==================================================================

// --- دالة مساعدة لاختيار رد عشوائي ---
const getRandomResponse = (responses: string[]): string => {
  return responses[Math.floor(Math.random() * responses.length)];
};

// 1. قاعدة البيانات المعرفية المطورة
// ------------------------------------
const knowledgeBase = {
  greetings: {
    keywords: ["مرحبا", "السلام عليكم", "أهلا", "هلا", "مساء الخير", "صباح الخير", "يا ولد"],
    responses: [
      "يا هلا! حياك الله في متجر نماء. أنا مساعدك الرقمي، تحت أمرك.",
      "أهلاً وسهلاً. كيف أقدر أخدمك اليوم؟",
      "عليكم السلام ورحمة الله. أبشر، ايش طلبك؟"
    ]
  },
  pricing: {
    keywords: ["سعر", "كم", "بكم", "قديش", "حسبتها", "على كم"],
    getProductPrice: (product: string): string => {
      if (product.includes("اسمنت مقاوم")) return "سعر كيس الأسمنت المقاوم عندنا بـ 18 ريال. تبغى كمية معينة؟ عندنا عروض للكميات.";
      if (product.includes("بلوك")) return "البلوك أنواع يا طيب. عندنا العادي أبو 20 سم بـ 2.5 ريال للحبة. وفيه العازل أغلى شوي. أي نوع في بالك؟";
      if (product.includes("حديد")) return "حديد التسليح سعره يتغير، لكن طن الـ 16 ملم اليوم حول 2800 ريال. تبغى أتأكد لك من سعر اللحظة؟";
      if (product.includes("مطرقة")) return "عندنا مطارق مختلفة، فيه مطرقة بخلّاعة مسامير بـ 25 ريال، وفيه مطارق ثقيلة للتكسير. أي استخدام تحتاجها له؟";
      return "أبشر بعزك، بس حدد لي ايش المنتج اللي تبغى سعره بالضبط عشان أعطيك العلم الأكيد. مثلاً قول: 'كم سعر بلوك عازل؟'";
    }
  },
  availability: {
    keywords: ["متوفر", "موجود", "عندكم", "ألاقي", "فيه"],
    responses: [
      "موجود بإذن الله. ايش المنتج اللي في خاطرك عشان أشيك لك عليه؟",
      "أبشر، أغلب البضاعة الأساسية متوفرة. سمّ لي طلبك وأنا أتأكد لك فوراً.",
    ]
  },
  productList: {
    keywords: ["ايش تبيعون", "قائمة المنتجات", "ايش عندكم"],
    response: "ما شاء الله كل شيء تحتاجه للبناء تحت سقف واحد. عندنا أقسام رئيسية: (مواد بناء أساسية، كهرباء، سباكة، عدد وأدوات، دهانات، ومعدات سلامة). أي قسم يهمك أكثر شيء؟"
  },
  delivery: {
    keywords: ["توصيل", "شحن", "يوصل", "ديليفري", "تجيبون", "طلبية"],
    responses: [
      "أكيد نوصل لأي مكان في جدة. أعطيني بس الحي والكمية التقريبية وأعطيك تكلفة التوصيل من عيوني.",
      "عندنا توصيل يا غالي. يبدأ من 50 ريال. فين موقعك عشان أحسب لك الحسبة صح؟"
    ]
  },
  comparison: {
    keywords: ["أفضل", "ايش الفرق", "مقارنة", "أحسن"],
    response: "سؤالك مهم ويدل على حرصك. شوف، الأسمنت المقاوم للأساسات والقواعد عشان يحمي من الرطوبة والأملاح. أما العادي فهو ممتاز للصبات الداخلية والأعمدة. مشروعك في أي مرحلة الحين؟"
  },
  contact: {
    keywords: ["اتصل", "رقمكم", "التواصل", "واتساب", "جوال"],
    responses: [
      "يسعدنا اتصالك على الرقم 0562061338. ولو تبغى أي شيء ثاني أنا في الخدمة.",
      "سجل الرقم عندك: 0562061338. تقدر تتصل أو ترسل واتساب. آمرني."
    ]
  },
  workingHours: {
    keywords: ["دوام", "متى تفتحون", "أوقات العمل", "مفتوحين", "تقفلون"],
    responses: [
      "المحل يفتح من 8 الصباح إلى 10 في الليل كل يوم ما عدا الجمعة. لكن أنا معاك هنا 24 ساعة، ما أقفل أبد.",
      "أوقات دوامنا من 8 صباحاً لـ 10 مساءً. بس لو احتجت أي شي في أي وقت، أنا موجود أخدمك."
    ]
  },
  thankYou: {
    keywords: ["شكرا", "يعطيك العافية", "مشكور", "ما قصرت"],
    responses: [
      "الله يعافيك. في الخدمة دايماً.",
      "العفو يا غالي. حاضرين للطيبين.",
      "ماسوينا إلا الواجب. لو احتجت شي ثاني لا تتردد."
    ]
  },
  fallback: {
    responses: [
      "معليش، ما فهمت عليك زين. ممكن توضح سؤالك؟ تقدر تسألني عن الأسعار أو التوصيل.",
      "العفو، ما استوعبت طلبك. جرب تسألني بطريقة ثانية. مثلاً: 'عندكم توصيل لحي الحمدانية؟'",
      "والله ما لقطتها. ممكن تعيد السؤال؟ أنا أفهم في أسعار المواد، التوصيل، وأوقات الدوام."
    ]
  }
};

// 2. الدالة الرئيسية المطورة (العقل المعالج)
// -----------------------------------------
export const getSmartReply = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase().trim();

  // ترتيب الأولوية مهم جداً
  if (knowledgeBase.pricing.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.pricing.getProductPrice(lowerCaseMessage);
  }
  if (knowledgeBase.greetings.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.greetings.responses);
  }
  if (knowledgeBase.productList.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.productList.response;
  }
  if (knowledgeBase.delivery.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.delivery.responses);
  }
  if (knowledgeBase.availability.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.availability.responses);
  }
  if (knowledgeBase.comparison.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return knowledgeBase.comparison.response;
  }
  if (knowledgeBase.workingHours.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.workingHours.responses);
s  }
  if (knowledgeBase.contact.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.contact.responses);
  }
  if (knowledgeBase.thankYou.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
    return getRandomResponse(knowledgeBase.thankYou.responses);
  }

  // الرد الافتراضي الذكي
  return getRandomResponse(knowledgeBase.fallback.responses);
};
