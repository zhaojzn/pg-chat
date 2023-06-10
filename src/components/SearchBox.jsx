import React, { useContext, useState, useEffect } from 'react'
import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from '../firebase'
import { async } from '@firebase/util';
import { AuthContext } from '../context/AuthContext';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { data } from 'autoprefixer';

const SearchBox = (props) => {

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  },[])
  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      props.onToggleSearch();
    }
  };



  


  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [err, setErr] = useState();
  const [userInfo, setUserInfo] = useState();
  const currentUser = useContext(AuthContext).currentUser


  const debounced = useDebouncedCallback((search) => {
    setSearch(search);
    handleApiCall(search)
  }, 1000);

  //handle 
  const handleApiCall = async (search) => {
    console.log("debouced -" + search);
    const q = query(
      collection(db, "users"),
      where("displayName", ">=", search),
      where("displayName", "<=", search + "\uf8ff") // add a range filter to match names that start with search
    );
    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      if (querySnapshot.docs.length > 0) {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        setUser(users);
      } else {
        setUser([]);
      }
    } catch (e) {
      console.log(e);
    }
    console.log(user);
  };



  const APICall = async (data) => {
    const q = query(collection(db, "users"), where("displayName", "==", data));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      return querySnapshot.docs.map((doc) => doc.data());
    }
    return []; // Return an empty array if no documents are found
  }
  
  const handleClick = async (e, data) => {
    let user = await APICall(data)
    const combinedId =
      currentUser.uid > user[0].uid
        ? currentUser.uid + user[0].uid
        : user[0].uid + currentUser.uid;
    console.log(combinedId)
    if(currentUser.uid != user[0].uid){
      try{
      
        //create chats with combinedID
        const res = await getDoc(doc(db, "chats", combinedId));
        console.log(res)
        if(!res.exists()){
          await setDoc(doc(db, "chats", combinedId), {messages: []})
          console.log("Created")
        }
      } catch (e){
        console.log(e)
      }   
  
      //update userChat for curernt user
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user[0].uid,
          displayName: user[0].displayName,
          photoURL: user[0].photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
  
      //update userChats for other user
      await updateDoc(doc(db, "userChats", user[0].uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }
      props.onToggleSearch();
    }



  return (
      <div className='bg-black items-center justify-center w-1/2 h-3/4 absolute top-[10%] right-1/4 opacity-100 overflow-scroll scrollbar-hide'>
          <div className='w-full h-[10%] bg-bg items-center flex justify-center'>
              <input type="text" 
              placeholder="Search username" 
              className="bg-transparent 
              text-white outline-0 w-100 text-center"
              onChange={(e) => debounced(e.target.value)}
              />
          </div>
            {user && user.map((u) => (
            <div key={u.displayName}>
              <div className='p-10 flex justify-left items-gap-10 bg-black cursor-pointer hover:bg-gray-900 rounded-full w-full ' onClick={(e) => handleClick(e, u.displayName)}>
                
                <div className='flex items-center gap-10'>
                  <img className='rounded-full h-10 w-10' src={u.photoURL} alt="" />  
                  <span className='text-lg font-medium text-white'>{u.displayName}</span>
                
                </div>

              
              </div>
            </div>
          ))}

      </div>
  )
}

export default SearchBox;