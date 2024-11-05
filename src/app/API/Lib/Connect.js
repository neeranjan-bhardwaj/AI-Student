import mongoose, { connect } from "mongoose";

global.conation=global.conation||{}

export async function connection() {
    if(!global.conation.connect){
        console.log("NEW connection")
        const string="mongodb://localhost:27017/"
        return global.conation.isconnected=await mongoose.connect(string)
    }
    console.log("OLD connection")
    return await global.conation.connect
    // console.log(mongoose.connection)
}