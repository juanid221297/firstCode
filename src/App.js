import React, { useState } from 'react';
import Navbar from "./Navbar"; 

import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Dark Mode';
    }
  }

  return (
    <>
      <Navbar title="Here is title" aboutText="About text is here:" mode={mode} toggleMode={toggleMode} />
      
      <Alert alert={alert} />
      <div className="container mb-3">
        <TextForm heading="Enter the text below:" />
      </div>

    </>
  );
}

export default App;