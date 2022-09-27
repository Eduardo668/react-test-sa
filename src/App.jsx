import { useState } from 'react';
import './App.css';

function App() {

   const [file, setFile] = useState();
   const [user, setUser] = useState({
      "fullname": "",
      "username": "",
      "email": "",
      "password": "",
      "born": "",
   })


   const User = {
      "fullname": "",
      "username": "",
      "email": "",
      "password": "",
      "born": "",
  
   }

  const getFileHandler = (event)=>{
   let formData = new FormData();
    setFile(event.target.files[0])
    formData.append("file");
    formData.append("fileName", file.name)

     User.photo = formData;
  }

  const handlerUserFullname = (event)=>{
      setUser({"fullname": event})
      User.fullname = event;
  }

  const handlerUserUsername = (event)=>{
   setUser({"username": event})
    User.username = event;
 }

 const handlerUserEmail = (event)=>{
   setUser({"email": event})
   User.email = event;
}

const handlerUserPassword = (event)=>{
   setUser({"password": event})
   User.password = event;
}

const handlerUserBorn = (event)=>{
   setUser({"born": event})
   User.born = event;
}

  const createUser = async ()=>{
     const response = await fetch("http://localhost:8080/user/saveUserImage", {
       mode: "no-cors",  
       method: "POST",
       body: JSON.stringify(User)
     })

     if (response == "true"){
        alert("FOI")
     }
  }

  const handlerUser = (User)=>{
      createUser();
 }


  return (
    <div className="App">
      <h1>FILE UPLOAD TEST</h1>
       <label>Nome Completo</label>
       <input type="text" value={user.fullname} onChange={
           (e)=>handlerUserFullname(e.target.value)
       }  />
       <br />
       <br />
        <label>Username</label>
       <input type="text" value={user.username} onChange={
           (e)=>handlerUserUsername(e.target.value)
       }  />
         <br />
         <br />
        <label>Email</label>
       <input type="text" value={user.email} onChange={
           (e)=>handlerUserEmail(e.target.value)
       }  />
     <br />
     <br />
     <label>Senha</label>
       <input type="text" value={user.password} onChange={
           (e)=>handlerUserPassword(e.target.value)
       }  />
     <br />
     <br />
     <label>Nacimento</label>
       <input type="text" value={user.born} onChange={
           (e)=>handlerUserBorn(e.target.value)
       }  />
     <br />
     <br />
       <input type="file"  onChange={
          getFileHandler   
       }  />
         <br />
         <br />
       <button onClick={handlerUser(User)} >CREATE A USER</button>
    </div>
  );
}

export default App;
