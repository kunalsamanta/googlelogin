import React,{useState} from "react";


export const Register = () =>{
    const [email,setEmail] =useState('');
    const [pass,setPass]=useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input type="text" placeholder="Enter your full Name" id="name"></input>
            <label for="emil">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder="abcd@gamil.com" id="emil"></input>
            <label for="pass">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password"></input>
            <button type="submit">Login</button>
            </form>
        
        </>
    )
}