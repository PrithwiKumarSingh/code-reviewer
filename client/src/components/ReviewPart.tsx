import { motion } from "framer-motion";

import ScoreCard from "./ui/ScoreCard";
import SummaryCard from "./ui/SummeryCard";
import StrengthsCard from "./ui/StrengthsCard";
import IssuesCard from "./ui/IssueCard";
import PerformanceCard from "./ui/PerformanceCard";
import BestPracticesCard from "./ui/BestPracticeCard";
import RefactoredCodeCard from "./ui/RefactoredCodeCard";

interface Issue {
  severity: string;
  category: string;
  title: string;
  description: string;
  recommendation: string;
  line?: number;
}

interface Performance {
  title: string;
  description: string;
  recommendation: string;
}

export interface ReviewResult {
  score: number;
  summary: string;
  strengths: string[];
  issues: Issue[];
  performance: Performance[];
  bestPractices: string[];
  refactoredCode: string;
  language?: string;
}

interface ReviewPanelProps {
  review: ReviewResult | null;
  loading: boolean;
}

export default function ReviewPart({
  review,
  loading,
}: ReviewPanelProps) {

    console.log(review);
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />

          <p className="text-slate-400">
            AI is reviewing your code...
          </p>
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 px-8 text-center">
        <div className="mb-6 rounded-full bg-indigo-500/10 p-5">
          🤖
        </div>

        <h2 className="text-2xl font-bold text-white">
          AI Code Review
        </h2>

        <p className="mt-3 max-w-md text-slate-400">
          Paste your code on the left and click
          <span className="font-semibold text-indigo-400">
            {" "}
            Review Code
          </span>
          .
          <br />
          Your AI review will appear here.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 overflow-y-auto p-6"
    >
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <ScoreCard score={review.score} />
        </div>

        <div className="col-span-8">
          <SummaryCard summary={review.summary} />
        </div>
      </div>

      {/* Strengths */}
      <StrengthsCard strengths={review.strengths} />

      {/* Issues */}
      <IssuesCard issues={review.issues} />

      {/* Bottom Cards */}
      <div className="grid grid-cols-2 gap-6">
        <PerformanceCard
          performance={review.performance}
        />

        <BestPracticesCard
          bestPractices={review.bestPractices}
        />
      </div>

      {/* Refactored Code */}
      <RefactoredCodeCard
        code={review.refactoredCode}
        language={review.language ?? "javascript"}
      />
    </motion.div>
  );
}