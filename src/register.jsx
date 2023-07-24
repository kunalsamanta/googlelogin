import React,{useState} from "react";
import './App.css';

export const Register = (props) =>{
    const [email,setEmail] =useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    return(
        <div className="form-container">
            <form className="registation-form" onSubmit={handleSubmit}>
            <label for="name" htmlFor="name">Name</label>
            <input value={name} name="name" type="text" placeholder="Enter your full Name" id="name"></input>
            <label htmlForfor="emil">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder="abcd@gamil.com" id="emil"></input>
            <label htmlForfor="pass">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password"></input>
            <button type="submit">Login</button>
            </form>
            <button className="lnk-button" onClick={() => props.onFromSwitch('login')}>Already have account?Login hear</button>
        </div>
    )
}