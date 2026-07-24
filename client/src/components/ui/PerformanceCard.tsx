import { motion } from "framer-motion";
import { Gauge, Zap } from "lucide-react";

interface Performance {
  title: string;
  description: string;
  recommendation: string;
}

interface PerformanceCardProps {
  performance: Performance[];
}

export default function PerformanceCard({
  performance,
}: PerformanceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-yellow-500/10 p-2">
          <Gauge className="h-5 w-5 text-yellow-400" />
        </div>

        <h2 className="text-lg font-semibold text-white">
          Performance
        </h2>
      </div>

      {performance.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 py-8 text-center text-slate-400">
          🚀 No performance improvements suggested.
        </div>
      ) : (
        <div className="space-y-5">
          {performance.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-yellow-400" />

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

              <div className="mt-5 rounded-lg bg-slate-900 p-4">
                <h4 className="mb-2 font-semibold text-green-400">
                  Recommendation
                </h4>

                <p className="text-slate-300">
                  {item.recommendation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}