import './App.css'; 
import React from "react";



function Login() {
    return (

<form className=' cover bg-white rounded-md '>
  <input
  type="text"
  placeholder="Enter Email"
  name='Email'
  required
  className='email placeholder:text-gray-600' 
  />
  <input 
  type="password"
  placeholder='Enter password'
  name='psw'
  required
  className='psw placeholder:text-gray-600' 
  />
  <button className='login rounded-md w-72 h-10 text-center bg-blue-400 font-bold text-2xl text-white'> Log In </button>
  <a href='' className='forgot'>Forgot Password?</a>
  <button className=' newacc rounded-md w-52 h-10 text-center bg-green-600 font-bold text-white'> Create new account </button>
  </form>

  )
}

export default Login;