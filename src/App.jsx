import { useState } from 'react';
import './App.css';

function App() {

   const [file, setFile] = useState();


  const getFileHandler = (event)=>{
     setFile(event.target.files[0])
  }

  const saveImage = async ()=>{

    let formData = new FormData();

    formData.append("file", file);
    formData.append("fileName", file.name)
    
  
     const response = await fetch("http://localhost:8080/user/saveUserImage", {
      mode: "no-cors",  
       method: "POST",
       body: formData
       
       
       
       
     })
  }


  return (
    <div className="App">
      <h1>FILE UPLOAD TEST</h1>
       <input type="file"  onChange={
          getFileHandler
       }  />
       <button onClick={saveImage} >SEND FILE</button>
    </div>
  );
}

export default App;
