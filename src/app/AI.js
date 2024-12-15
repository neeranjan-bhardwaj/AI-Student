"use server"

import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'
import { NextResponse } from 'next/server'


export async function RoadMap(Topic) {
    try{
        const AI=new GoogleGenerativeAI(process.env.API)
        const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash"})
        // if(!Topic)throw Error("Topic is not found") //*check if Topic is there
        const prompt=`I want you act as pro of ${Topic}.Now i want you to make a Roadmap of ${Topic}. Make sure the roadmap is in full Detail also It should be const of 3 Level(1.Beginner,2.Advance,3.Pro). and each level have Chapter accordingly(max 10). Each Chapter have All the topic and explain in one line . and also Give one link To the site where he can learn ${Topic} . And also it should be in JSON fermat Like this [{Level:"Beginner",Chapter:[{Topic:"",Explanation:""}],Resource:""},{Level:"Advance",Chapter:[{Topic:"",Explanation:""},Resource:""],},{Level:"Pro",Chapter:[{Topic:"",Explanation:""}],Resource:""}]. I only want JSON Data nothing more `

        const chat= Model.startChat({  //* Model fine-tuning
            history:[{
                role:"user",
                parts:[{text:prompt}]
            }]
        })
        // console.log(Topic)

        const Message=await chat.sendMessage(Topic); //* send message to model Chat 
        const Response= Message.response.text() //* Get response in txt
            console.log(Response)
        return Response
    }catch(err){
        console.log(err)
    }
    
}
