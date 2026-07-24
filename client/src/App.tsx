import { CodePart } from "./components/CodePart"
import { ReviewPart } from "./components/ReviewPart"

export default function App(){ 
  const code = `
  import { useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { Copy } from "lucide-react";

interface CodePartProps {
  code: string;
  language: string;
}

export function CodePart({
  code,
  language,
}: CodePartProps) {
  const editorRef =
    useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <h2 className="font-semibold text-white">
          Refactored Code
        </h2>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
        >
          <Copy size={16} />
          Copy
        </button>
      </div>

      <Editor
        height="500px"
        language={language}
        value={code}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          readOnly: true,
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          fontSize: 15,
          fontFamily: "JetBrains Mono",
          lineNumbers: "on",
          roundedSelection: false,
          folding: true,
          wordWrap: "on",
        }}
      />
    </div>
  );
}
   `
  return(
    <div className="grid grid-cols-2  min-h-screen gap-4 p-4">
      {/* left side */}
        <div className="bg-gray-900 h-full p-4 overflow-hidden">
            <CodePart />
        </div>

        {/* right side */}
        <div className="bg-blue-500 h-full">
            <ReviewPart/>
        </div>
    </div>
  )
}