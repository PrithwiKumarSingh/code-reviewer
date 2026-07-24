import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ScoreCardProps {
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps) {
  const getStatus = () => {
    if (score >= 90)
      return {
        text: "Excellent",
        color: "#22c55e",
        message: "Production Ready",
      };

    if (score >= 75)
      return {
        text: "Good",
        color: "#3b82f6",
        message: "Minor Improvements Needed",
      };

    if (score >= 60)
      return {
        text: "Average",
        color: "#eab308",
        message: "Needs Optimization",
      };

    if (score >= 40)
      return {
        text: "Poor",
        color: "#f97316",
        message: "Requires Major Improvements",
      };

    return {
      text: "Critical",
      color: "#ef4444",
      message: "Not Production Ready",
    };
  };

  const status = getStatus();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl"
    >
      <h2 className="mb-6 text-lg font-semibold text-white">
        Overall Score
      </h2>

      <div className="mx-auto h-44 w-44">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: status.color,
            trailColor: "#1e293b",
            textColor: "#ffffff",
            textSize: "20px",
            pathTransitionDuration: 1.5,
          })}
        />
      </div>

      <div className="mt-8 flex flex-col items-center">
        <span
          className="rounded-full px-4 py-1 text-sm font-semibold"
          style={{
            backgroundColor: `${status.color}20`,
            color: status.color,
          }}
        >
          {status.text}
        </span>

        <p className="mt-4 text-center text-sm text-slate-400">
          {status.message}
        </p>
      </div>
    </motion.div>
  );
}