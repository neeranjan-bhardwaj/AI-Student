import mongoose, { mongo } from "mongoose";

const AIschema=mongoose.Schema({
    role:String,
    parts:[{
        text:String
    }]
})

const Schema= mongoose.models.model||mongoose.model("model",AIschema)

export default Schema