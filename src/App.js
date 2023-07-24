import React ,{useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';
import {Login} from './login'

import {Register} from './register';

function App() {
  const [currentForm,setCurrentForm] = useState('login');

  return (
    <div className="App">
      {
      currentForm === "login" ?<Login />: <Register />
}
      <GoogleOAuthProvider clientId="108392579703-3og8pnrbb27epb0shkl755fiu2go2hie.apps.googleusercontent.com">
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>;

      
    </div>
  );
}

export default App;
