import { useState } from "react";

export const AnimatedBackground = () => { 
  const [dots] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animation: 15 + Math.random() * 20,
      animationDelay: Math.random() * 5
    }))
  );
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div key={dot.id} 
        className="absolute w-1.5 h-1.5 rounded-full opacity-80" 
        style={{
          backgroundColor: "#d9b968", 
          left: `${dot.left}%`, 
          top: `${dot.top}%`,
          animation: `slow-drift ${dot.animation}s ease-in-out infinite`,
          animationDelay: `${dot.animationDelay}s`
        }}
        />
      ))}
      </div>
  )
}
