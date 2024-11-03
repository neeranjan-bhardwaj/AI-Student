"use server"

import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'

const AI=new GoogleGenerativeAI(process.env.API)
const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash",tools:[{codeExecution:{}}] })

export async function RoadMap(Topic) {

        // if(!Topic)throw Error("Topic is not found") //*check if Topic is there
        const prompt=``
        const History=[
            {
                role:"user",
                parts:[{text:prompt}]
            }
        ]  //* Keep track of History with first prompt
        const chat= Model.startChat({  //* Model fine-tuning
            history:History
        })

        const Message=await chat.sendMessage(prompt) //* send message to model Chat 
        const Response= await Message.response.text() //* Get response in txt
        // console.log(Response)

        History.push(
            {
                role:"user",
                parts:[{text:Topic}]
            },
            {
                role:"model",
                parts:[{text:Response}]
            }) //* making history for chat 

        // const cleanedData = Message.replace(/```json/g, "").replace(/```/g, "").trim(); //* trim the response to get only json and replace unwanted staff   
        // const JsonResponse=await JSON.parse(cleanedData)//! Go in front-end Both line
        console.log("HEllo")
        return Response
    
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