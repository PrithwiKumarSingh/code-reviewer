import { motion } from "framer-motion";
import { BookOpenCheck, CheckCircle2 } from "lucide-react";

interface BestPracticesCardProps {
  bestPractices: string[];
}

export default function BestPracticesCard({
  bestPractices,
}: BestPracticesCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-indigo-500/10 p-2">
          <BookOpenCheck className="h-5 w-5 text-indigo-400" />
        </div>

        <h2 className="text-lg font-semibold text-white">
          Best Practices
        </h2>
      </div>

      {bestPractices.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 py-8 text-center text-slate-400">
          No recommendations available.
        </div>
      ) : (
        <div className="space-y-4">
          {bestPractices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              className="flex gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-400" />

              <p className="leading-7 text-slate-300">
                {practice}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}