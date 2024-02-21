import {Connection} from '@/app/dbConfig/config' ;
import userProfileModel from '@/app/models/userModel' ;
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;

let userProfileModel : any ;
Connection()
export async function POST(request:NextRequest){
     try {
         const reqBody = await request.json() ;
         const {userEmail,userPassword} = reqBody ;
         console.log(reqBody) ;
         let prevUser = await userProfileModel.findOne({userEmail}) ;
         if(!prevUser){
            return NextResponse.json({error:"Unable to find email"},{status:404}) ;
         }
         const validPassword = await bcryptjs.compare(userPassword,prevUser.userPassword) ; 
         if(!validPassword) {
            return NextResponse.json({error:"Invalid credentials"}, {status:404}) ;
         }
         console.log(prevUser) ;
         const tokenData = {
            id : prevUser._id ,
            userName:prevUser.userName ,
            userEmail:prevUser.userEmail ,
         }
         const token = await jwt.sign(tokenData,process.env.secret_key!, {expiresIn:"1d"}) ;
         const response = NextResponse.json(
             {
                message:"Login successfull",
                success:true
             }
         )
         response.cookies.set("token",token,
         { 
          httpOnly:true
         }
         )
         return response  ;

     }
     catch(error){
        console.log(error) ;
        return NextResponse.json({error:"Unable to perform request"}, {status:500}) ;
     }
}