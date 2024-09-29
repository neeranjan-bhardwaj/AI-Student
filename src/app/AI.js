"use server"

import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'

// let Que="hi"
let ChatData=[]
let RoadmapData=[]
const AI=new GoogleGenerativeAI(process.env.API)
const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash",tools:[{codeExecution:{}}] })

export async function GetResult (Que) {
    const Chat=Model.startChat({
        history:ChatData
    })
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

export async function GetRodmap(Que) {
    // const Schema={
    //     type: SchemaType.ARRAY,
    //     items: {
    //         type: SchemaType.OBJECT,
    //         properties: {
    //         Level: {
    //             type: SchemaType.STRING,
                
    //         },
    //     },
    //     required: ["recipeName"],
    // }
    // }
    let History=Model.startChat({
        history:[
            {
                role:"user",
                parts:[{text:`Act as expart Road map maker and make road map of ${Que}`}]
            },
            {
                role:"model",
                parts:[{text:`Here is the road map of ${Que}`}]
            },
            {
                role:"user",
                parts:[{text:`Make it more optimize`}]
            },
            {
                role:"model",
                parts:[{text:`Here is the more optimize of${Que}`}]
            },
            {
                role:"user",
                parts:[{text:`Make it more ditle and Level as well and provide Resoures as well  `}]
            },
            {
                role:"model",
                parts:[{text:`Here is the more ditle road map with Resoures`}]
            },
            {
                role:"user",
                parts:[{text:`Make this rode map in JSON with out any extra text like json codeLevel = {'Level': string,
                            'Description':string,
                            'Learn':Array<Learn>
                            'Resoures':Array<Resoures>Return: Array<Level>`}]
            },
            {
                role:"model",
                parts:[{text:`[{'Level':"Phase 1",'Description':"",'Learn':["1. 2. "]'Resoures':[{Books:"",Links:""}]}]`}]
            }
            // RoadmapData.length<0?RoadmapData.map((e)=>{e}):{
            //     role:"model",
            //     parts:[{text:`Here is the more ditle road map with Resoures`}]
            // },
        ]
    })
    let Res=await History.sendMessage(Que)
//     RoadmapData.push({
//         role: "user",
//         parts: [{ text: Que }],
//     },
//     {
//         role: "model",
//         parts: [{ text: Res.response.text() }],
//     },
// )

    const data=Res.response.text()
    const cleanedData = data.replace(/```json/g, "").replace(/```/g, "").trim();
    console.log( JSON.parse(cleanedData))
}