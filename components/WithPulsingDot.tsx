// components/WithPulsingDot.tsx
import React from 'react';

// هذا هو "المكون عالي الرتبة" (HOC) أو المُغلِّف.
// يأخذ "الأبناء" (children) كـ prop ويعرضهم داخل حاوية.
const WithPulsingDot = ({ children }: { children: React.ReactNode }) => {
  return (
    // الحاوية الرئيسية التي تسمح بوضع النقطة بشكل مطلق فوق الأبناء
    <div className="relative inline-block">
      {/* عرض المكون الأصلي (الزر العائم) */}
      {children}

      {/* حاوية النقطة النابضة، موضوعة في أعلى يمين الزر */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        {/* الدائرة الخارجية للنبض (تتوسع وتختفي) */}
        <span 
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          // استخدام لون الهوية البصرية (الأزرق الغامق) للنبض
          style={{ backgroundColor: '#005A8C' }} 
        ></span>
        {/* الدائرة الداخلية الثابتة */}
        <span 
          className="relative inline-flex rounded-full h-4 w-4"
          // استخدام نفس لون الهوية البصرية
          style={{ backgroundColor: '#005A8C' }}
        ></span>
      </span>
    </div>
  );
};

export default WithPulsingDot;
