import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ScoreCardProps {
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 flex items-center gap-6 border border-gray-700 w-full">
      <div className="w-32 h-38 flex ">
        <CircularProgressbar
          value={score}
          text={`${score/10}/10`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor:
              score >= 80
                ? "#22c55e"
                : score >= 60
                ? "#eab308"
                : "#ef4444",
            textColor: "#ffffff",
            trailColor: "#374151",
            textSize: "18px",
          })}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">Overall Score</h2>

        <p className="text-gray-400 mt-1">
          {score >= 80
            ? "Excellent Code You write a better code for the future in the sense"
            : score >= 60
            ? "Good Code"
            : score >= 40
            ? "Needs Improvement"
            : "Poor Quality"}
        </p>
      </div>
    </div>
  );
}