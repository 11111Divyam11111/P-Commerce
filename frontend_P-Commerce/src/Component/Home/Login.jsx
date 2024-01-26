import React , {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        // if(auth){
        //     navigate('/');
        // }
    },[]);

    const handleClick = async () =>{
        let result  = await fetch('http://localhost:7000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result = await result.json();
        console.log(result);
        if(result){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }
        else{
            alert("Please Enter correct details")
        }
    }

    return (
        <>  
          <Navbar/>
          <div className="login">
            <h1>Login</h1>
            <input className="inputBox" value={email}  onChange={(event)=>setEmail(event.target.value)}  type="text" placeholder="Enter your Email"></input>
            <input className="inputBox" value = {password} onChange={(event)=>setPassword(event.target.value)}type="password" placeholder="Enter your password"></input>
            <button type="button" onClick={handleClick}  className="submit">Login</button>
        </div>
        </>
        
    )
}

export default Login;