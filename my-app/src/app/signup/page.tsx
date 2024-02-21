

"use client" 
import Link from "next/link" ;
import React , {useEffect} from "react" ;
import {useRouter} from "next/navigation" ;
import axios from "axios"  ;
import {toast} from "react-hot-toast" ;

export default function Signup () {
    const router = useRouter() ;
    const [user,setUser] = React.useState({
       userName:"",
       userEmail:"",
       userPassword:"",
    }
    )
    const [buttonDisabled,setButtonDisabled] = React.useState(false) ;
    const [loading,setLoading] = React.useState(false) ;
{/*
    const handleSignUp = async() => {
        try {
             setLoading(true) ;
             const postResponse = await axios.post("/api/users/signup",user) ;
             router.push("/login") ;
        }
        catch(error){
            console.log(error) ;
            toast.error('Unable to signp') ;
        }
        finally{
            setLoading(false) ;
        }
    }
*/}    
    useEffect(() => {
        if(user.userName.length > 0 && user.userEmail.length > 0 && user.userPassword.length >0){
            setButtonDisabled(false) ;
        }
        else {
            setButtonDisabled(true) ;
        }
    }, [user])

    return (
       // <div className = 'bg-white h-screen justify-center items-center'>
       <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="bg-darkgrey-500 border-black-500 mx-40 my-40 p-8 rounded-xl">
        <input type='text' value={user.userName} placeholder="Enter your username" className="border-black rounded-xl mb-4 p-2 text-xl w-25 h-5" />
        <br />
        <input type='email' value={user.userEmail} placeholder="Enter your email address" className="border-black rounded-xl mb-4 p-2 text-xl w-25 h-5" />
        <br />
        <input type='password' value={user.userPassword} placeholder="Enter your password" className="border-black rounded-xl p-2 text-xl w-25 h-5" />
    </div>
</div>

    )
}


