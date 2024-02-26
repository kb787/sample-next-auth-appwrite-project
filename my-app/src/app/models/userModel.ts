import mongoose from 'mongoose' ;
import {InferSchemaType,Schema,model} from "mongoose" ;
const userAuthSchema = new Schema(
    {
        userName : {
            type:String ,
            unique:true
        } ,
        userEmail : {
            type:String ,
            unique:true 
        } ,
        userPassword : {
            type:String
        } ,
        isVerified : {
            type:Boolean ,
            default:false 
        } ,
        isAdmin : {
            type:Boolean  ,
            default:false 
        } ,
        forgotPasswordToken : {
            type:String 
        } ,
        forgotPasswordTokenExpiry : {
           type:String  
        } ,
        verifyToken : {
            type:String ,
        } ,
        verifyTokenExpiry : {
            type:Date
        }
    }
)

export type userAuth = InferSchemaType<typeof userAuthSchema> ;
const userAuthModel = model("users",userAuthSchema) ;
export default userAuthModel ;