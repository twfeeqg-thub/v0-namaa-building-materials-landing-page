// components/WithPulsingDot.tsx
import React from 'react';

const WithPulsingDot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-block">
      {children}

      {/* --- [تلميع 1] تعديل موضع وحجم النقطة --- */}
      {/* تم تغيير top-0 right-0 إلى top-2 right-2 لوضعها داخل الدائرة */}
      {/* تم تصغير حجمها من h-4 w-4 إلى h-3 w-3 لتكون أنعم */}
      <span className="absolute top-2 right-2 flex h-3 w-3">
        
        {/* الدائرة الخارجية للنبض (أصبحت أكثر شفافية) */}
        <span 
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" // <-- الشفافية أصبحت 50%
          style={{ backgroundColor: '#005A8C' }} 
        ></span>
        
        {/* الدائرة الداخلية الثابتة (أصبحت أكثر شفافية أيضًا) */}
        <span 
          className="relative inline-flex rounded-full h-3 w-3"
          style={{ backgroundColor: '#005A8C', opacity: 0.75 }} // <-- شفافية 75%
        ></span>
      </span>
    </div>
  );
};

export default WithPulsingDot;
