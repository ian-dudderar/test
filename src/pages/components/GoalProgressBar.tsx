import React from "react";
import Image from "next/image";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div
      className={`h-12 w-auto bg-blue-100 rounded-full overflow-hidden border-4 border-pink-300 ${className}`}
    >
      <div
        className="h-full  transition-all duration-[2000ms] ease-in-out bg-gradient-to-r from-pink-300 to-pink-300 animate-candy-cane"
        style={{
          width: `${value}%`,
          backgroundSize: "800px 800px",
          // backgroundImage:
          //   "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent 100%)",
        }}
      />
    </div>
  );
};

interface GoalProgressBarProps {
  currentAmount: number;
  goalAmount: number;
}

export default function GoalProgressBar({
  currentAmount = 23,
  goalAmount = 100,
}: GoalProgressBarProps) {
  const percentage = Math.min(
    Math.round((currentAmount / goalAmount) * 100),
    100
  );

  return (
    <>
    <div className="w-1/2">
      <style jsx global>{`
        @keyframes candy-cane {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }
        .animate-candy-cane {
          animation: candy-cane 1s linear infinite;
        }
      `}</style>
      <div className="mb-8">
        <Image
          src="https://maxandlily.com/cdn/shop/files/maxlily_bf8919cd-416f-4fb9-a72f-36a0cc30f605.png?height=400&v=1672769861"
          alt="Company Logo"
          width={600}
          height={200}
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full max-w-lg">
        <Progress value={percentage} />
      </div>

    </div>
    </>
  );
}
