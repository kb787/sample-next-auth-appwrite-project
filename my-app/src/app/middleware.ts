import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const pathObtained = request.nextUrl.pathname ;
    const publicPath = pathObtained === '/login' || pathObtained === '/signup' ||  pathObtained === '/verifyemail' 
    const token = request.cookies.get('token')?.value || ''
    if(publicPath && token){
        return NextResponse.redirect(new URL ('/',request.nextUrl))
    }
    else if(!publicPath && token){
        return NextResponse.redirect(new URL ('/login', request.nextUrl))
    }
}

export const config = {
    matcher : [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}