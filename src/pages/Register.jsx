
import { createUserWithEmailAndPassword,  updateProfile} from "firebase/auth";
import { useState } from "react";
import { auth,storage,db } from '../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Add from '../img/add.png'
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//https://firebasestorage.googleapis.com/v0/b/react-firebase-23730.appspot.com/o/user.png?alt=media&token=37c243b8-12a9-4d99-bc05-a7723c6fdc33
const Register = () =>{


  const [err,setErr] = useState()
  const [fileState, setFileState] = useState()
  const navigate = useNavigate()


  const imageUplaod = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setFileState(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    let file = e.target[3].files[0]


    if(!displayName || !email || !password || !file){
      toast.warn("Please fill all the fields" , {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return
    }
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log("Created")
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      toast.info('Photo is uploading.', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          setErr("Something went wrong")
          
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid),{
              displayName,
              email,
              photoURL: downloadURL,
              uid: res.user.uid
            });
            await setDoc(doc(db, "userChats", res.user.uid),{

            });
            navigate("/");

          });
        }
      );

    }catch(z){
      toast.warn(z.message, {
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
    <div className="h-screen bg-bg flex items-center justify-center ">
      <div className="h-4/5 w-1/2 bg-white rounded-lg flex flex-col items-center overflow-scroll">
        <span className="font-bold text-[#121212] p-10 text-4xl">PGSS Chat</span>
        <form onSubmit={handleSubmit} className="flex flex-col items-center pb-2 gap-[10px]">
          <input required className="p-5 hover:border-b border-b-bg" type="text" placeholder="Username" />
          <input required className="p-5 hover:border-b border-b-bg" type="email" placeholder="Email" />
          <input required className="p-5 hover:border-b border-b-bg" type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" onChange={imageUplaod}/>
          <label htmlFor="file" className="flex items-center gap-[10px] text-xs cursor-pointer">
            <img src={Add} alt="" className="w-[32px]"/>
            <span className='text-base'>{fileState ? 'Added avatar' : 'Add an avatar'}</span>
          </label>
          <button className="bg-[#121212] text-white font-bold py-3 px-10 rounded-lg gap-y-24">Register</button>
          <ToastContainer/>
        </form>
        <span className="text-black pt-5 font-bold font text-1xl">Already registered? <a href="/login" className="hover:text-gray-600">Login</a></span>
      </div>
    </div>
  )
}

export default Register
