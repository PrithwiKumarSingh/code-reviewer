import { useState } from "react"
import { CodePart } from "./components/CodePart"
import  ReviewPart  from "./components/ReviewPart"

export default function App(){ 
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);

  return(
    <div className="grid grid-cols-2  min-h-screen gap-4 p-4">
      {/* left side */}
        <div className="bg-gray-900 h-full p-4 overflow-hidden">
            <CodePart setLoading={setLoading} setReview={setReview} />
        </div>

        {/* right side */}
        <div className="bg-blue-500 h-full">
            <ReviewPart review={review} loading={loading} />
        </div>
    </div>
  )
}