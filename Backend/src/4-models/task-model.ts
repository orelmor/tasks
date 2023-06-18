import mongoose from "mongoose";
import { CustomerModel } from "./customer-model";

// interface
export interface ITaskModel extends mongoose.Document{
    description:string
    date:string
    customerId: mongoose.Schema.Types.ObjectId
    done:boolean
}

// Schmea
export const TaskSchema = new mongoose.Schema<ITaskModel>({
    description:{
        type:String,
        required:[ true, "Missing task description"]
    },
    date:{
        type:String,
        required:[ true, "Missing task date"]
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId
    },
    done:{
        type:Boolean,
        required:[ true, "Please task status"]
    }
},{
    versionKey: false,
    toJSON:{virtuals:true},
    id:false
})

TaskSchema.virtual("customer",{
    ref:CustomerModel,
    localField:"customerId",
    foreignField: "_id",
    justOne:true

})

// Model 
export const TaskModel = mongoose.model<ITaskModel>("TaskModel",TaskSchema,"tasklist")