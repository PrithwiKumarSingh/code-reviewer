import express from "express"
import "dotenv/config"
import {generateContent} from "./services/service.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())


app.get("/", (req,res)=>{
    try{
        res.json({
            message : "Hello, Hi There"
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

app.post("/ai/get-response", async(req,res)=>{
    const code = req.body.code; 
    
        if(!code){
            return res.status(400).json({
                message : "Code is required" 
            })
        }
        
        const response = await generateContent(code)
        res.status(200).json({
            response
        })
})



app.listen(3000,()=>{
    console.log("http://localhost:3000");
})