import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from '../firebase'
import { async } from '@firebase/util';
import { AuthContext } from '../context/AuthContext';
import SearchBox from './SearchBox';
const Search = (props) => {


  const [chatState, setChatState] = useState(false)
  const handleChat = async () =>
  {
    setChatState(!chatState);
    props.onToggleSearch();
  }

  return (
    <div className='text-center'>
      <button className="p-10 bg-transparent text-white outline-0 w-100 " onClick={handleChat}>Search</button>
      {chatState && (
        <SearchBox/>
      )}
    </div>
  )


  // const [search, setSearch] = useState("")
  // const [user, setUser] = useState();
  // const [err, setErr] = useState();

  // const currentUser = useContext(AuthContext).currentUser

  // const handleChat = async () =>{
  //   // this makes it so it always the same id no matter what 
  //   // ex : aw3r and r131a
  //   // always: aw3rr131a
  //   const combinedId =
  //     currentUser.uid > user.uid
  //       ? currentUser.uid + user.uid
  //       : user.uid + currentUser.uid;
  //   if(currentUser.uid != user.uid){
  //     try{
      
  //       //create chats with combinedID
  //       const res = await getDoc(doc(db, "chats", combinedId));
  //       console.log(res)
  //       if(!res.exists()){
  //         await setDoc(doc(db, "chats", combinedId), {message: []})
  //         console.log("Created")
  //       }
  //     } catch (e){
  //       console.log(e)
  //     }   
  
  //     //update userChat for curernt user
  //     await updateDoc(doc(db, "userChats", currentUser.uid), {
  //       [combinedId + ".userInfo"]: {
  //         uid: user.uid,
  //         displayName: user.displayName,
  //         photoURL: user.photoURL,
  //       },
  //       [combinedId + ".date"]: serverTimestamp(),
  //     });
  
  //     //update userChats for other user
  //     await updateDoc(doc(db, "userChats", user.uid), {
  //       [combinedId + ".userInfo"]: {
  //         uid: currentUser.uid,
  //         displayName: currentUser.displayName,
  //         photoURL: currentUser.photoURL,
  //       },
  //       [combinedId + ".date"]: serverTimestamp(),
  //     });
  //   }else{
  //     toast.warn("You cannot start a convo with yourself", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       });  
  //   }

  //   setUser(null)
  //   setSearch("")
  // }

  // const queryEvent = async () =>{
  //   const q = query(collection(db, "users"), where("displayName", "==", search));

  //   try{
  //     const querySnapshot = await getDocs(q);
  //     if(querySnapshot.docs.length > 0){
  //       querySnapshot.forEach((doc) => {
  //         setUser(doc.data())
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //     }else{
  //       toast.warn("Unknown User", {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //         });   
  //     }

  //   }catch (e){
  //     toast.warn(e.message, {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       });
  //   }

  // }
  // const handleKeyDown = (e) => {
  //   if(e.key == 'Enter'){
  //     queryEvent()
  //   }
  // }

  // return (
  //   <div>
  //       <div className="">
  //           <input type="text" 
  //           placeholder="Search" 
  //           className="p-10 bg-transparent 
  //           text-white outline-0 w-100" 
  //           onChange={e=>setSearch(e.target.value)}
  //           onKeyDown={handleKeyDown}
  //           value={search}
  //           />
  //       </div>
  //       <ToastContainer/>
  //       {user && (
  //           <div className='p-10 flex items-center gap-10 bg-gray-500 cursor-pointer border-b-8 border-b-bg' onClick={handleChat}>
  //             <img src={user.photoURL} className='w-12 h-12 rounded-full'></img>
  //             <div>
  //                <span className='text-lg font-medium text-white '>{user.displayName}</span>
  //             </div>
  //           </div>
  //       )}

  //   </div>
  // )
}

export default Search