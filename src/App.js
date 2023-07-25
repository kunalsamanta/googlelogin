import React ,{useState} from 'react';

import './App.css';
import {Login} from './login';

import {Register} from './register';



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


      
    </div>
  );
}

export default App;
