import './App.css'; 
import React from "react";
import { motion } from "framer-motion"


function Login() {
    return (

<motion.form
         initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
          }}
          animate={{
          x: 0,
          opacity: 1,
          scale: 1
          }}
          transition={{
          duration: 2
          }}
className=' cover bg-white rounded-md '>
  <input
  type="email"
  placeholder="Enter Email or phone number"
  name='Email'
  required
  className='email placeholder:text-gray-600 outline-blue-400' 
  />
  <input 
  type="password"
  placeholder='Enter password'
  name='psw'
  required
  className='psw placeholder:text-gray-600 outline-blue-400' 
  />
  <button href='https://www.facebook.com/login/' className='login rounded-md w-72 h-10 text-center bg-blue-600 font-bold text-2xl text-white'> Log In </button>
  <button className='forgot text-blue-400 hover:underline' href='https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc0NTc3Mjk5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login'  >Forgot Password? </button>
  <button href='https://www.facebook.com/' className=' newacc rounded-md w-52 h-10 text-center bg-green-600 font-bold text-white'> Create new account </button>
  </motion.form>

  )
}

export default Login;