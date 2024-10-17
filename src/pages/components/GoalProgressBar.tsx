import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div
      className={`h-2 w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
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
    <div className="goal-progress-bar w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <div className="progress-header flex justify-between mb-2">
        <span className="progress-label text-sm font-medium text-gray-600">
          Progress
        </span>
        <span className="progress-percentage text-sm font-bold text-blue-600">
          {percentage}%
        </span>
      </div>
      <Progress value={percentage} />
      <div className="progress-footer flex justify-between mt-2">
        <span className="progress-current text-sm text-gray-600">
          Current: {currentAmount}
        </span>
        <span className="progress-goal text-sm text-gray-600">
          Goal: {goalAmount}
        </span>
      </div>
    </div>
  );
}
