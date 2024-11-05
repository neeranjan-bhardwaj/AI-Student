"use server"

import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'
import { connection } from '../Lib/Connect'
import Schema from '../schema/AI'

const AI=new GoogleGenerativeAI(process.env.API)
const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash",tools:[{codeExecution:{}}] })

export async function RoadMap(Topic) {
    try{
        connection()
        // if(!Topic)throw Error("Topic is not found") //*check if Topic is there
        const prompt=``
        const History=await Schema.find({
            role: { $exists: true },
            parts: { $exists: true }
        }).select("-_id -parts._id").select("-__v");
        console.log(History.map(e=>e.parts))

        const chat= Model.startChat({  //* Model fine-tuning
            history:History
        })

        
        const Message=await chat.sendMessage(Topic) //* send message to model Chat 
        const Response= await Message.response.text() //* Get response in txt
        
        await Schema.create([
            {
                role:"user",
                parts:[{text:Topic}]
            },
            {
                role:"model",
                parts:[{text:Response}]
            }
        ])

        // const cleanedData = Message.replace(/```json/g, "").replace(/```/g, "").trim(); //* trim the response to get only json and replace unwanted staff   
        // const JsonResponse=await JSON.parse(cleanedData)//! Go in front-end Both line
        // console.log(History.map(e=>e.parts.map(e=>e.text)))
        return Response
    }catch(err){
        console.log(err)
    }
    
}

export async function Teacher(Text) { //! Can work with PDF need to find way to Check PDF existed or not
    if(!Text)throw Error("Can not find File")
    const prompt=``
    const History=[{
        role:'user',
        parts:[{text:prompt}]
    }]
    const Chat=Model.startChat({
        history:History
    })
    const Message=await Chat.sendMessage(Text)
    const Response=await Message.response.text()

    History.push(
        {
            role:"user",
            part:[{text:Response}]
        },
        {
            role:"model",
            part:[{text:Response}]
        }
    )

    return Response
}