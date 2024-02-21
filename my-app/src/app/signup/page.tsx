
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
       <div className="flex items-center justify-center min-h-screen bg-slate-200"> 
       <div className="flex flex-col justify-center align-middle bg-slate-400 border-2  border-black p-5 rounded-xl h-5/6 pt-6 pb-6 pr-15 pl-15 w-96">
       <h5 className = "text-2xl text-center font-serif">Complete your registration</h5>
        <input type='text' value={user.userName} placeholder="Enter your username" className="border-black rounded-xl mb-4 p-2 text-xl w-35 h-13 mt-3" onChange = {(e) => setUser(prevState => ({...prevState, userName: e.target.value}))}/>
        <br />
        <input type='email' value={user.userEmail} placeholder="Enter your email address" className="border-black rounded-xl mb-4 p-2 text-xl w-35 h-13" onChange = {(e) => setUser(prevState => ({...prevState, userEmail: e.target.value}))} />
        <br />
        <input type='password' value={user.userPassword} placeholder="Enter your password" className="border-black rounded-xl p-2 text-xl w-35 h-13" onChange = {(e) => setUser(prevState => ({...prevState, userPassword: e.target.value}))} />
        <br/>
        <button className = 'bg-blue-500 rounded-md w-28 h-12 text-xl text-white flex justify-center items-center mx-24'>Register</button>
    </div>
</div>
    )
}


