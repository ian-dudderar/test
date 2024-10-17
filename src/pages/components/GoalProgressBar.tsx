import React from "react";
import Image from "next/image";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div
      className={`h-12 w-full bg-blue-100 rounded-full overflow-hidden border-4${className}`}
    >
      <div
        className="h-full transition-all duration-[2000ms] ease-in-out bg-gradient-to-r from-primary-blue to-primary-blue "
        style={{
          width: `${value}%`,
          backgroundSize: "40px 40px",
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
      {/* // Change the width here if u want to */}
      <div className="">
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
        <div className="">
          <Image
            src="https://maxandlily.com/cdn/shop/files/maxlily_bf8919cd-416f-4fb9-a72f-36a0cc30f605.png?height=400&v=1672769861"
            alt="Company Logo"
            width={600}
            height={200}
            className=" h-auto"
          />
        </div>
        <div className="w-full">
          <div className="justify-between w-full flex p-2 text-primary-pink">
            <span className="text-lg font-medium">Progress</span>
            <span className="text-lg font-bold">{percentage}%</span>
          </div>
          <Progress value={percentage} />
          <div className="text-lg justify-between w-full flex p-2 text-primary-pink">
            <span>Current: ${currentAmount}</span>
            <span>Goal: $1,000,000</span>
          </div>
        </div>
      </div>
    </>
  );
}
