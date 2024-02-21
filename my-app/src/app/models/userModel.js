const mongoose = require('mongoose') ;


const userSchema = mongoose.Schema(
    {
        userName : {
            type:String 
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


if(mongoose.models.users){
    return mongoose.model('users') ;
}

userProfileModel = mongoose.model('users',userSchema) ;
module.exports = userProfileModel ;