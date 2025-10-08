// ========================================================================
// العقل المفكر: الخبير الرقمي 3.0 (الموسوعة الحجازية فائقة الإبهار)
// ========================================================================

// --- دالة مساعدة لاختيار رد عشوائي ---
const getRandomResponse = (responses: string[]): string => {
  return responses[Math.floor(Math.random() * responses.length)];
};

// --- دالة مساعدة لاستخلاص الأسماء ---
const extractName = (message: string): string | null => {
  const patterns = [/أنا (أبو \w+|أم \w+)/, /معاك (أبو \w+|أم \w+)/, /اسمي (أبو \w+|أم \w+)/];
  for (const pattern of patterns) {
    const match = message.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

// 1. قاعدة البيانات المعرفية الموسّعة (الموسوعة)
// -------------------------------------------------
const knowledgeBase = {
  // ... (معلومات الترحيب، الشكر، والرد الافتراضي تبقى كما هي)
  greetings: {
    keywords: ["مرحبا", "السلام عليكم", "أهلا", "هلا", "مساء الخير", "صباح الخير", "يا ولد"],
    responses: [
      "يا هلا! حياك الله في متجر نماء. أنا مساعدك الرقمي، تحت أمرك.",
      "أهلاً وسهلاً. كيف أقدر أخدمك اليوم؟",
      "عليكم السلام ورحمة الله. أبشر، ايش طلبك؟"
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
  },
  // --- المحاور الجديدة والمطورة ---
  products: {
    "اسمنت مقاوم": { brand: "أسمنت اليمامة", origin: "سعودي", price: 18, bulkPrice: 17.5, bulkThreshold: 100, description: "مثالي للأساسات والقواعد والمناطق الرطبة لمقاومته العالية للأملاح والكبريتات." },
    "اسمنت عادي": { brand: "أسمنت العربية", origin: "سعودي", price: 16, bulkPrice: 15.5, bulkThreshold: 100, description: "ممتاز لأعمال الصبات الداخلية والتشطيبات العامة." },
    "بلوك عادي 20سم": { brand: "مصنع الراجحي", origin: "سعودي", price: 2.5, bulkPrice: 2.3, bulkThreshold: 500, description: "بلوك اسمنتي مصمت، مناسب للجدران الداخلية والخارجية." },
    "بلوك عازل 20سم": { brand: "مصنع الراجحي", origin: "سعودي", price: 4, bulkPrice: 3.8, bulkThreshold: 500, description: "بلوك بركاني خفيف الوزن وعازل للحرارة والصوت، يوفر في فواتير الكهرباء." },
    "حديد تسليح 16مم": { brand: "حديد سابك", origin: "سعودي", price: 2850, bulkPrice: 2800, bulkThreshold: 10, description: "حديد عالي الجودة لأعمال الهيكل الإنشائي والصبات المسلحة. (السعر للطن)" },
    "عازل مائي سيكا": { brand: "سيكا (Sika)", origin: "سويسري", price: 250, bulkPrice: 240, bulkThreshold: 10, description: "عازل اسمنتي مرن للأسطح والخزانات، مقاوم ممتاز للحرارة والرطوبة. (السعر للبرميل 20 لتر)" },
    "دهان جوتاشيلد": { brand: "جوتن (Jotun)", origin: "نرويجي", price: 350, bulkPrice: 330, bulkThreshold: 10, description: "دهان خارجي فائق الجودة، مقاوم لأقسى الظروف الجوية في جدة. (السعر للبرميل)" },
    "مطرقة بخلّاعة": { brand: "ستانلي (Stanley)", origin: "أمريكي", price: 45, bulkPrice: 40, bulkThreshold: 20, description: "مطرقة احترافية بخلّاعة مسامير، يد مريحة وقوة عالية." },
    "مواسير سباكة خضراء": { brand: "تحويل (Tahweel)", origin: "سعودي", price: 25, bulkPrice: 23, bulkThreshold: 50, description: "مواسير حرارية عالية الجودة للسباكة الداخلية، تتحمل الحرارة والضغط. (السعر للماسورة 4 متر)" },
  },
  services: {
    delivery: "أكيد نوصل لأي مكان في جدة. الطلبات فوق 500 ريال توصيلها علينا (مجاني). أقل من كذا، حق المشوار 30 ريال. طلبك يوصلك في الغالب خلال 24 ساعة.",
    payment: "الدفع سهل وميسر. تقدر تدفع كاش أو شبكة مع المندوب وقت الاستلام، أو تحويل بنكي.",
    quotes: "فهمت، تبغى عرض سعر لمشروع. أبشر باللي يرضيك. المقاولين والمشاريع لهم أسعار خاصة جدًا. بس عطني اسمك ورقم جوالك، والمدير المسؤول بنفسه راح يتواصل معاك بعرض سعر ما راح تلاقيه عند غيرنا."
  },
  expertise: {
    compare_cement: "سؤالك في محله يا طيب. شوف، أسمنت اليمامة (المقاوم) هذا حق الشغل الثقيل والأساسات اللي تحت الأرض، عشان يحميها من الرطوبة والأملاح. أما الأسمنت العادي فهو بطل في الصبات الداخلية والتشطيبات. مشروعك في أي مرحلة الحين؟",
    recommend_paint: "لأجواء جدة الحارة والرطوبة، ما فيه أفضل من دهانات 'جوتن جوتاشيلد'. مصممة خصيصًا عشان تقاوم الشمس والمطر وتحافظ على لونها سنين. تبغى لون معين في بالك؟"
  },
  storeInfo: {
    hours: "المحل يفتح من 8 الصباح إلى 10 في الليل كل يوم ما عدا الجمعة. لكن أنا معاك هنا 24 ساعة، ما أقفل أبد.",
    location: "موقعنا في حي الريان بجدة. لو تبغى اللوكيشن بالضبط، بس قول لي وأرسله لك على طول.",
    contact: "سجل الرقم عندك: 0562061338. تقدر تتصل أو ترسل واتساب. آمرني."
  },
  advancedFallback: "هذا سؤال فني دقيق وممتاز. ولأننا نهتم نعطيك المعلومة الأكيدة، ممكن تترك لي رقمك والمهندس المختص عندنا راح يتواصل معاك ويفيدك بالتفصيل؟"
};

// 2. الدالة الرئيسية المطورة (العقل المعالج 3.0)
// -----------------------------------------------
export const getSmartReply = (message: string, currentName: string | null): { reply: string; newName: string | null } => {
  const lowerCaseMessage = message.toLowerCase().trim();
  let newName = extractName(message) || currentName;
  let reply = "";

  const nameGreeting = newName ? `يا ${newName}, ` : "";

  // --- منطق معالجة الأسئلة (بترتيب الأولوية) ---

  // 1. طلب عرض سعر للمشاريع (الأولوية القصوى)
  if (["مشروع", "كميات", "مقاول", "عرض سعر"].some(k => lowerCaseMessage.includes(k))) {
    reply = knowledgeBase.services.quotes;
    return { reply, newName };
  }

  // 2. مقارنات فنية
  if (lowerCaseMessage.includes("فرق بين") && lowerCaseMessage.includes("اسمنت")) {
    reply = knowledgeBase.expertise.compare_cement;
    return { reply, newName };
  }
  if (lowerCaseMessage.includes("أفضل دهان") || lowerCaseMessage.includes("أحسن دهان")) {
    reply = knowledgeBase.expertise.recommend_paint;
    return { reply, newName };
  }

  // 3. أسعار المنتجات (المنطق الذكي)
  const productKeywords = Object.keys(knowledgeBase.products);
  const foundProductKey = productKeywords.find(p => lowerCaseMessage.includes(p));

  if (foundProductKey) {
    const product = knowledgeBase.products[foundProductKey as keyof typeof knowledgeBase.products];
    reply = `${nameGreeting}سعر ${foundProductKey} من ماركة ${product.brand} (${product.origin}) هو ${product.price} ريال. ${product.description} ولو بتاخذ كمية فوق ${product.bulkThreshold}، نحسبها لك بسعر الجملة ${product.bulkPrice}.`;
    return { reply, newName };
  }
  if (["سعر", "كم", "بكم", "قديش"].some(k => lowerCaseMessage.includes(k))) {
    reply = `${nameGreeting}أبشر بعزك، بس حدد لي ايش المنتج اللي تبغى سعره بالضبط عشان أعطيك العلم الأكيد. مثلاً قول: 'كم سعر بلوك عازل؟'`;
    return { reply, newName };
  }

  // 4. الخدمات (توصيل ودفع)
  if (["توصيل", "شحن", "يوصل"].some(k => lowerCaseMessage.includes(k))) {
    reply = nameGreeting + knowledgeBase.services.delivery;
    return { reply, newName };
  }
  if (["دفع", "تحويل", "شبكة"].some(k => lowerCaseMessage.includes(k))) {
    reply = nameGreeting + knowledgeBase.services.payment;
    return { reply, newName };
  }

  // 5. معلومات المتجر
  if (["دوام", "متى تفتحون", "أوقات العمل"].some(k => lowerCaseMessage.includes(k))) {
    reply = nameGreeting + knowledgeBase.storeInfo.hours;
    return { reply, newName };
  }
  if (["فينكم", "موقعكم", "لوكيشن"].some(k => lowerCaseMessage.includes(k))) {
    reply = nameGreeting + knowledgeBase.storeInfo.location;
    return { reply, newName };
  }
  if (["اتصل", "رقمكم", "جوال"].some(k => lowerCaseMessage.includes(k))) {
    reply = nameGreeting + knowledgeBase.storeInfo.contact;
    return { reply, newName };
  }

  // 6. الأسئلة العامة
  if (knowledgeBase.greetings.keywords.some(k => lowerCaseMessage.includes(k))) {
    reply = getRandomResponse(knowledgeBase.greetings.responses);
    return { reply, newName };
  }
  if (knowledgeBase.thankYou.keywords.some(k => lowerCaseMessage.includes(k))) {
    reply = getRandomResponse(knowledgeBase.thankYou.responses);
    return { reply, newName };
  }

  // 7. شبكة الأمان (الأسئلة الصعبة)
  if (lowerCaseMessage.length > 25) { // افتراض أن الأسئلة الطويلة قد تكون معقدة
      return { reply: knowledgeBase.advancedFallback, newName };
  }

  // 8. الرد الافتراضي النهائي
  reply = getRandomResponse(knowledgeBase.fallback.responses);
  return { reply, newName };
};
