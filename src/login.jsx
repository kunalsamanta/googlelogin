import React, {useState} from "react";
import './App.css';

export const Login = (props) =>{
    const [email,setEmail] =useState('');
    const [pass,setPass]=useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return(
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlForfor="emil">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder="abcd@gamil.com" id="emil"></input>
            <label htmlFor="pass">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password"></input>
            <button type="submit">Login</button>

            
            </form>
            <button className="lnk-button" onClick={()=>props.onFromSwitch('register')}>Don't have account?Register hear</button>
        </div>
    )
}