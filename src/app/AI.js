"use server"

import { GoogleGenerativeAI } from '@google/generative-ai'

// let Que="hi"
let ChatData=[]
const AI=new GoogleGenerativeAI(process.env.API)
const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash" })
const Chat=Model.startChat({
    history:ChatData
})

export async function GetResult (Que) {
    let Res=await Chat.sendMessage(Que)
    ChatData.push({
        role: "user",
        parts: [{ text: Que }],
    },
    {
        role: "model",
        parts: [{ text: Res.response.text() }],
    }
    )
    return Res.response.text()
}