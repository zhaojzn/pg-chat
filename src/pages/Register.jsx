
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../firebase'
import Add from '../img/add.png'
const Register = () =>{

  const [err,setErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[1].file

    if(!displayName || !email || !password){
      alert("Please fill in all the boxes")
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log("Created user")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true);
        alert(errorMessage)
        
        // ..
      });
  }
    }
    


  return (    
    <div className="h-screen bg-bg flex items-center justify-center ">
      <div className="h-4/5 w-1/2 bg-white rounded-lg flex flex-col items-center overflow-scroll">
        <span className="font-bold text-[#121212] p-10 text-4xl">Alpha Chat</span>
        <form onSubmit={handleSubmit} className="flex flex-col items-center pb-2 gap-[10px]">
          <input required className="p-5 hover:border-b border-b-bg" type="text" placeholder="Username" />
          <input required className="p-5 hover:border-b border-b-bg" type="email" placeholder="Email" />
          <input required className="p-5 hover:border-b border-b-bg" type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="flex items-center gap-[10px] text-xs cursor-pointer">
            <img src={Add} alt="" className="w-[32px]"/>
            <span>Add an avatar</span>
          </label>
          <button className="bg-[#121212] text-white font-bold p-5 rounded-lg">Register</button>
          {err && <span>Something went wrong</span>}
        </form>
        <span className="text-black pt-5 font-bold font text-1xl">Already registered? <a href="https://www.google.ca/" className="hover:text-gray-600">Login</a></span>
      </div>
    </div>
  )
}

export default Register
