import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from '../firebase'
import { async } from '@firebase/util';
import { AuthContext } from '../context/AuthContext';
const Search = () => {

  const [search, setSearch] = useState("")
  const [user, setUser] = useState();
  const [err, setErr] = useState();

  const currentUser = useContext(AuthContext).currentUser

  const handleChat = async () =>{

    // this makes it so it always the same id no matter what 
    // ex : aw3r and r131a
    // always: aw3rr131a

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    console.log(combinedId)
  }

  const queryEvent = async () =>{
    const q = query(collection(db, "users"), where("displayName", "==", search));

    try{
      const querySnapshot = await getDocs(q);
      if(querySnapshot.docs.length > 0){
        querySnapshot.forEach((doc) => {
          setUser(doc.data())
          console.log(doc.id, " => ", doc.data());
        });
      }else{
        toast.warn("Unknown User", {
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

    }catch (e){
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
  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
      queryEvent()
    }
  }

  return (
    <div>
        <div className="">
            <input type="text" 
            placeholder="Search" 
            className="p-10 bg-transparent 
            text-white outline-0 w-100" 
            onChange={e=>setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            />
        </div>
        <ToastContainer/>
        {user && (
            <div className='p-10 flex items-center gap-10 bg-gray-500 cursor-pointer border-b-8 border-b-bg' onClick={handleChat}>
              <img src={user.photoURL} className='w-12 h-12 rounded-full'></img>
              <div>
                 <span className='text-lg font-medium text-white '>{user.displayName}</span>
              </div>
            </div>
        )}

    </div>
  )
}

export default Search