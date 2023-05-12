import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from '../firebase'
import { async } from '@firebase/util';
import { AuthContext } from '../context/AuthContext';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

const SearchBox = () => {


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



  
  return (
    <div className='bg-black items-center justify-center w-1/2 h-3/4 absolute top-[10%] right-1/4 opacity-100'>
        <div className='w-full h-[10%] bg-bg items-center flex justify-center'>
            <input type="text" 
            placeholder="Search username" 
            className="bg-transparent 
            text-white outline-0 w-100 text-center"
            onChange={e=>debonced(e.target.value)}
            />
        </div>
    </div>
  )
}

export default SearchBox