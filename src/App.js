import React ,{useState} from 'react';

import './App.css';
import {Login} from './login';

import {Register} from './register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [currentForm,setCurrentForm] = useState('login');
const toggleForm = (forName) =>{
  setCurrentForm(forName);
}
  return (
    <div className="App">
      {
      currentForm === "login" ?<Login onFromSwitch={toggleForm} />: <Register onFromSwitch={toggleForm} />
}
<div >
    <GoogleOAuthProvider className='google-cointener' clientId="108392579703-3og8pnrbb27epb0shkl755fiu2go2hie.apps.googleusercontent.com">
      <GoogleLogin
          onSuccess={credentialResponse => {
          console.log(credentialResponse);
          }}
          onError={() => {
          console.log('Login Failed');
          }}
      />
      </GoogleOAuthProvider>
</div>

      
    </div>
  );
}

export default App;
