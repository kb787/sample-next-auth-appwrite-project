import {Connection} from '@/app/dbConfig/config' ;
import userProfileModel from '@/app/models/userModel' ;
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs' ; 

let userProfileModel:any ;

Connection()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json() ;
        const {userName,userEmail,userPassword} = reqBody ;
        console.log(reqBody) ;
        let prevEmail = await userProfileModel.findOne({userEmail}) ;
        if(prevEmail){
            return NextResponse.json({error:"User already exists"}, {status:400}) ;
        }

        const salt = await bcryptjs.genSalt(10) ;
        const hashedPassword = await bcryptjs.hash(userPassword,salt) ;
        const newUser = await new userProfileModel(
            {
                userName:userName,
                userEmail:userEmail,
                userPassword:hashedPassword
            }
        )
        const savedUser = await newUser.save() ;
        console.log(savedUser) ;
    }
    catch(error){
        console.log(error) ;
        return NextResponse.json({error:"Unable to perform the request"}, {status:500}) ;
    }
}

