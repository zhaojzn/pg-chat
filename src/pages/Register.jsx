
const Register = () =>{

  return (
    <div className="h-screen bg-bg flex items-center justify-center">
      <div className="h-3/5 w-1/2 bg-white rounded-lg flex flex-col items-center">
        <span className="font-bold text-[#121212] p-10 text-4xl">Alpha Chat</span>
        <form className="flex flex-col items-center pb-2">
          <input className="p-5 hover:border-b border-b-bg" type="text" placeholder="Username" />
          <input className="p-5 hover:border-b border-b-bg" type="email" placeholder="Email" />
          <input className="p-5 hover:border-b border-b-bg" type="password" placeholder="Password" />
        </form>
        <button className="bg-[#121212] text-white font-bold p-5 rounded-lg">Register</button>
        <span className="text-black pt-5 font-bold font text-1xl">Already registered? <a href="https://www.google.ca/" className="hover:text-gray-600">Login</a></span>
      </div>
    </div>
  )
}

export default Register
