import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg :message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  return (
    <>
    
      <Navbar title ="textutil"/>
      <Alert alert={alert} />
      <div className='container my-3'>
        
            {/* <About /> */}
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter" />
       
        </div>
    
      </>

  );
}

export default App;
