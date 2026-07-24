import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import { Copy, Check, Code2 } from "lucide-react";
import { useState } from "react";

interface RefactoredCodeCardProps {
  code: string;
  language: string;
}

export default function RefactoredCodeCard({
  code,
  language,
}: RefactoredCodeCardProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-[#0f172a] shadow-xl overflow-hidden"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <Code2 className="h-5 w-5 text-indigo-400" />

          <div>
            <h2 className="font-semibold text-white">
              Refactored Code
            </h2>

            <p className="text-sm text-slate-400">
              AI Suggested Implementation
            </p>
          </div>
        </div>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Monaco */}

      <Editor
        height="500px"
        language={language}
        value={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          fontSize: 15,
          fontLigatures: true,
          automaticLayout: true,
          padding: {
            top: 18,
          },
        }}
      />
    </motion.div>
  );
}