import express  from "express";
import * as dotenv from 'dotenv';
import { OpenAI} from 'openai';


dotenv.config();

const router = express.Router();



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


router.route('/').get((req,res)=>{
    res.status(200).json({ message: "Hello from DALL.E Routes"})
})

router.route('/').post(async (req,res)=>{
    try {
        const { prompt }= req.body;

        const response = await openai.createImage({
            prompt,
            n:1,
            size: '1024x1024',
            reponse_format: 'b64_json'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong"})
    }
})

export default router;