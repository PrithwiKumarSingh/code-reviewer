import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface SummaryCardProps {
  summary: string;
}

export default function SummaryCard({
  summary,
}: SummaryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl h-full"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-500/15 p-2">
          <FileText className="h-5 w-5 text-indigo-400" />
        </div>

        <h2 className="text-lg font-semibold text-white">
          AI Summary
        </h2>
      </div>

      <div className="mt-5">
        <p className="leading-8 text-slate-300">
          {summary}
        </p>
      </div>
    </motion.div>
  );
}