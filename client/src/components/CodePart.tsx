import { useState } from "react";
import  Editor  from "@monaco-editor/react";
import { BACKEND_URL } from "../config";
import { Copy, Sparkles } from "lucide-react";
import axios from "axios";
import { Button } from "./ui/Button";


interface CodePartProps{
  setReview: React.Dispatch<React.SetStateAction<any>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean
}

export function CodePart({ setReview, setLoading, loading}:CodePartProps) {


  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  const [code, setCode] = useState("// Paste your code here...");
  const [selectedValue, setSelectedValue] = useState("javascript");

  const handleChange = (event:any)=>{
    setSelectedValue(event.target.value);
  } 

  const getReview = async(code :string)=>{
    setLoading(true);
    const res = await axios.post(`${BACKEND_URL}/ai/get-response`, {
      code
    })
    setReview(res.data.response)
    setLoading(false);
  }

  return (
    
    <div className="overflow-hidden rounded-xl border border-zinc-800 fixed w-[46%]">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#101828] px-4 py-2">
        <div >
        <label className="text-white mx-4" htmlFor="frameworks">Choose a framework:</label>
          <select onChange={handleChange} value={selectedValue} className="bg-[#101828] text-white border border-gray-700 px-2 py-1 rounded" name="frameworks" id="frameworks">
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
            <option value="python">Python</option>
            <option value="Java">java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="rust">Rust</option>
            <option value="go">Go</option>
          </select>
          </div>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
        >
          <Copy size={16} />
          Copy
        </button>
      </div>

      <Editor
      height="80vh"
      language={selectedValue}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value ?? "")}
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
        fontSize: 15,
        wordWrap: "on",
      }}
    />
    <div className="flex justify-end my-2">

      <Button 
       onClick={()=>getReview(code)}
       text={"Review"} 
       variant="primary" 
       size="md" 
       loading={loading} 
       endIcon={<Sparkles size={20}/>} />
    </div>
    </div>
  );
}
