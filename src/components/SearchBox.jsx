import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from '../firebase'
import { async } from '@firebase/util';
import { AuthContext } from '../context/AuthContext';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
<<<<<<< HEAD
=======
  
>>>>>>> origin/master

const SearchBox = () => {


<<<<<<< HEAD
  const [search, setSearch] = useState("")
  const [value, setValue] = useState("")

  const debonced = useDebouncedCallback(
    
    (value) => {
      console.log(value + " - debounced")
      setValue(value)
    }
    ,
    800
  );



  
=======

  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const [err, setErr] = useState();

  const debounced = useDebouncedCallback((search) => {
    setSearch(search);
    handleApiCall(search)
  }, 1000);

  //handle 
  const handleApiCall = async (search) =>{
    const q = query(collection(db, "users"), where("displayName", "==", search));
    try{
      const querySnapshot = await getDocs(q);
      console.log("1" + "-  " + JSON.stringify(querySnapshot))
      if(querySnapshot.docs.length > 0){
        setUser(querySnapshot)
      }else{
          setUser("")
      }

    //snapshot each query

    }catch (e){
      console.log("Error")
    }
    console.log(user)
  }



>>>>>>> origin/master
  return (
    <div className='bg-black items-center justify-center w-1/2 h-3/4 absolute top-[10%] right-1/4 opacity-100'>
        <div className='w-full h-[10%] bg-bg items-center flex justify-center'>
            <input type="text" 
            placeholder="Search username" 
            className="bg-transparent 
            text-white outline-0 w-100 text-center"
<<<<<<< HEAD
            onChange={e=>debonced(e.target.value)}
=======
            onChange={(e) => debounced(e.target.value)}
>>>>>>> origin/master
            />
        </div>
        {user && Object.entries(user).map((m) => (
          <div>
            <div className='p-10 flex justify-center items-gap-10 bg-gray-500 cursor-pointer hover:bg-gray-400 rounded-full w-full' key={m}>
            <span className='text-lg font-medium text-white '></span>

            </div>
          </div>
        ))} 

    </div>
  )
}

export default SearchBox