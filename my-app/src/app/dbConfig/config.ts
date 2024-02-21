import dotenv from 'dotenv' ;
import mongoose from 'mongoose';
import colors from 'colors'

dotenv.config() ;
export function Connection(){
    try {
        mongoose.connect(process.env.mongodb_uri!) 
        console.log(`Successfully connected`.bgGreen) ;
    }
    catch(error){
        console.log(`Unable to connect to database due to error ${error}`.bgRed) ;
    }
}