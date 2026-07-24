import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bug,
  ShieldAlert,
  CircleAlert,
} from "lucide-react";

interface Issue {
  severity: string;
  category: string;
  title: string;
  description: string;
  recommendation: string;
  line?: number;
}

interface IssuesCardProps {
  issues: Issue[];
}

export default function IssuesCard({
  issues,
}: IssuesCardProps) {
  const getSeverity = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return {
          color: "text-red-400",
          bg: "bg-red-500/10",
          border: "border-red-500/30",
          icon: ShieldAlert,
        };

      case "high":
        return {
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/30",
          icon: AlertTriangle,
        };

      case "medium":
        return {
          color: "text-yellow-400",
          bg: "bg-yellow-500/10",
          border: "border-yellow-500/30",
          icon: CircleAlert,
        };

      default:
        return {
          color: "text-blue-400",
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          icon: Bug,
        };
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Issues Found
        </h2>

        <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
          {issues.length} Issues
        </span>
      </div>

      {issues.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 py-10 text-center text-slate-400">
          🎉 No issues detected
        </div>
      ) : (
        <div className="space-y-5">
          {issues.map((issue, index) => {
            const style = getSeverity(issue.severity);
            const Icon = style.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className={`rounded-xl border ${style.border} ${style.bg} p-5`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <Icon
                      className={`${style.color} mt-1 h-5 w-5`}
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {issue.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {issue.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.color}`}
                  >
                    {issue.severity}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {issue.description}
                </p>

                {issue.line && (
                  <div className="mt-3 text-sm text-indigo-400">
                    Line : {issue.line}
                  </div>
                )}

                <div className="mt-5 rounded-lg bg-slate-900 p-4">
                  <h4 className="mb-2 font-semibold text-green-400">
                    Recommendation
                  </h4>

                  <p className="text-slate-300">
                    {issue.recommendation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}