"use client";

import Image from "next/image";

const handImageUrl = "https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png";

export function WavingHand() {
  return (
    <div
      className="fixed top-4 left-4 z-50 pointer-events-none select-none"
      aria-hidden="true"
    >
      <Image
        src={handImageUrl}
        alt="Waving hand"
        width={40}
        height={40}
        className="drop-shadow-md opacity-95 animate-wave"
        priority
      />
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-wave {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}