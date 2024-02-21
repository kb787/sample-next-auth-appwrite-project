import { NextRequest,NextResponse } from "next/server";
import { Connection } from "@/app/dbConfig/config";
import userProfileModel from "@/app/models/userModel" ;

Connection() ;

export async function POST(request:NextRequest){
    try {
       const reqBody = await request.json() ; 
       const {token} = reqBody ;
       console.log(token) ;
       
       const userAvail = await userProfileModel.findOne({verifyToken:token,verifyTokenExpiry:{$gt : Date.now()}}) ;
       if(!userAvail){
          return NextResponse.json({"error":"Invalid token"}, {status:400}) ;
       }
       console.log(userAvail) ;

       userAvail.isVerified = true ;
       userAvail.verifyToken = undefined ;
       userAvail.verifyTokenExpiry = undefined ;
       await userAvail.save() ;

    }
    catch(error){
        console.log(error) ;
    }
}