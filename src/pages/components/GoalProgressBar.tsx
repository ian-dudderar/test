import React from "react";
// import "./GoalProgressBar.css";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div className={`progress ${className}`}>
      <div className="progress-bar" style={{ width: `${value}%` }} />
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
    <div className="goal-progress-bar">
      <div className="progress-header">
        <span className="progress-label">Progress</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <Progress value={percentage} />
      <div className="progress-footer">
        <span className="progress-current">Current: {currentAmount}</span>
        <span className="progress-goal">Goal: {goalAmount}</span>
      </div>
    </div>
  );
}
