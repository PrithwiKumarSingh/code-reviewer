import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface StrengthsCardProps {
  strengths: string[];
}

export default function StrengthsCard({
  strengths,
}: StrengthsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-green-500/15 p-2">
            <ShieldCheck className="h-5 w-5 text-green-400" />
          </div>

          <h2 className="text-lg font-semibold text-white">
            Strengths
          </h2>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-sm font-semibold text-green-400">
          {strengths.length}
        </div>
      </div>

      {/* Body */}
      <div className="mt-6 space-y-4">
        {strengths.length > 0 ? (
          strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

              <p className="text-slate-300 leading-7">
                {strength}
              </p>
            </motion.div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-slate-700 py-8 text-center">
            <p className="text-slate-500">
              No strengths were detected.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}