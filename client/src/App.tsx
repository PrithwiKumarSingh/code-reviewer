import { useState } from "react"
import { CodePart } from "./components/CodePart"
import  ReviewPart  from "./components/ReviewPart"

export default function App(){ 
  const [loading, setLoading] = useState<boolean>(false);
  const [review, setReview] = useState(null);

  return(
    <div className="grid grid-cols-2  min-h-screen gap-4 bg-[#101828] w-full">
      {/* left side */}
        <div className=" overflow-hidden border-r-2 border-gray-700 p-4">
            <CodePart setLoading={setLoading} setReview={setReview} loading={loading} />
        </div>

        {/* right side */}
        <div className="h-full p-4">
            <ReviewPart review={review} loading={loading} />
        </div>
    </div>
  )
}