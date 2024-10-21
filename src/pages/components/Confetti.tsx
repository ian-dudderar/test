"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Confetti component to avoid SSR issues
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Component() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial dimensions
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update dimensions on window resize
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={true}
        numberOfPieces={200}
        gravity={0.1}
        colors={[
          "#16ade4",
          "#ed0088",
          "#A7E1F6",
          "#FF91D0",
          "#8AC75D",
          "#E2F1D6",
          "#5CC8EF",
          "#B6DC9A",
        ]}
      />
    </div>
  );
}
