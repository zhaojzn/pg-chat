import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth,storage,db } from '../firebase'

const Login = () =>{

    const navigate = useNavigate();
    
    const handleSumbit = async (e) =>{
      e.preventDefault()
      const email = e.target[0].value
      const password = e.target[1].value
      console.log(email + "\n" + password);

      try{
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
      }catch(e){
        toast.warn(e.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      
    }
  

    return (
      <div className="h-screen bg-bg flex items-center justify-center">
        <div className="h-3/5 w-1/2 bg-white rounded-lg flex flex-col items-center">
          <span className="font-bold text-[#121212] p-10 text-4xl">PGSS Chat</span>
          <form onSubmit={handleSumbit} className="flex flex-col items-center pb-2 gap-[10px]">
            <input className="p-5 hover:border-b border-b-bg" type="text" placeholder="Username" />
            <input className="p-5 hover:border-b border-b-bg" type="password" placeholder="Password" />
            <button className="bg-[#121212] text-white font-bold p-5 rounded-lg gap-y-24 ">Login</button>
            <ToastContainer/>
          </form>
          <span className="text-black pt-5 font-bold font text-1xl">Dont have account? <a href="/register" className="hover:text-gray-600">Register</a></span>
        </div>
      </div>
    )
  }
  
  export default Login