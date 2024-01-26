import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, SignContainer, Inp, Btn } from "./Mid_Styled";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/')
        }
    }, []);

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:7000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')
    }
    

    return (
        <>  
        <Navbar/>
        <center>
        <SignContainer>
                <Text>Register</Text>
                <Inp type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></Inp><br />
                <Inp type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"></Inp><br />
                <Inp type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"></Inp>
        </SignContainer>
        <Btn onClick={collectData} className="submit">Sign Up</Btn>
        </center>
        <Footer/>            
        </>


    )
}

export default Signup;