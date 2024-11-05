"use server"

import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'
import { connection } from '../Lib/Connect'
import Schema from '../schema/AI'

const AI=new GoogleGenerativeAI(process.env.API)
const Model=AI.getGenerativeModel({ model: "gemini-1.5-flash",tools:[{codeExecution:{}}] })

export async function RoadMap(Topic) {
    try{
        // if(!Topic)throw Error("Topic is not found") //*check if Topic is there
        const prompt=`I want you act as pro of ${Topic}.Now i want you to make a Roadmap of ${Topic}. Make sure the roadmap is in full Detail also It should be const of 3 Level(1.Beginner,2.Advance,3.Pro). and each level have Chapter accordingly(max 10). Each Chapter have All the topic and explain in one line . and also Give one link To the site where he can learn ${Topic} . And also it should be in JSON fermat Like this [{Level:"Beginner",Chapter:[{Topic:"",Explanation:""}],Resource:""},{Level:"Advance",Chapter:[{Topic:"",Explanation:""},Resource:""],},{Level:"Pro",Chapter:[{Topic:"",Explanation:""}],Resource:""}]. I only want JSON Data nothing more `

        const History=[{
            role:"user",
            parts:[{text:prompt}]
        }]

        const chat= Model.startChat({  //* Model fine-tuning
            history:History
        })

        
        const Message=await chat.sendMessage(Topic) //* send message to model Chat 
        const Response= await Message.response.text() //* Get response in txt

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