import mongoose from "mongoose";

// interface
export interface ICustomerModel extends mongoose.Document {
    fullName:string
    job:string
    phone:string
    email:string
}



// Schmea

export const CustomerSchema = new mongoose.Schema<ICustomerModel>({
    fullName:{
        type:String,
        required: [true, "Missing customer's full name"]
    },
    job: {
        type:String,
        required: [true, "Missing customer's job"]
    },
    phone: {
        type:String,
        required: [true, "Missing customer's phone number"]
    },
    email: {
        type:String,
        required: [true, "Missing customer's email"]
    }
})

// Model 
export const CustomerModel = mongoose.model<ICustomerModel>("CustomerModel",CustomerSchema,"customers")
