
import './App.css';
import Login from './Login.js';
import React from "react";
import { motion } from "framer-motion"
import { Name } from './Placeholder.tsx';
function App() {
  return (
  <main className=' max-h-full'>
    
      <div className='main'>
      
        <motion.img
                          initial={{
                            x: -500,
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
        src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
        className='object-scale-down object-left FBLogo' 
        alt=''
        />
        
        <Login className='' ></Login>
        <motion.div
          initial={{
          y: 500,
          opacity: 0,
          scale: 0.5
          }}
          animate={{
          y: 0,
          opacity: 1,
          scale: 1
          }}
          transition={{
          duration: 2
          }}
        >
      <h1 className='cPage'><button className='text-black hover:underline font-semibold' href='https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc0NTc3Mjk5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login'  >Create a Page </button> for a celebrity, brand or business.</h1>
        </motion.div>
        <motion.h1
          initial={{
          x: -500,
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
        className=' divider text-3xl'>Connect with friends and the world around you on Facebook.</motion.h1>
      </div>
      <motion.h2
         initial={{
          x: -500,
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
      className='footer spacing mb-14  text-sm text-gray-500 hover:underline'>
          English(US)
          Español
          Français(France)
          中文(简体)
          العربية
          Português(Brasil)
          Italiano
          한국어
          Deutsch
          हिन्दी
          日本語
      </motion.h2>
      
      <motion.footer 
          initial={{
          x: -500,
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
      className='footer text-xs spacing text-gray-500 hover:underline'>
      Sign Up Log In Messenger Facebook Lite Watch Places Games Marketplace Meta Pay Oculus Portal Instagram Bulletin Fundraisers Services Voting Information CenterPrivacy PolicyPrivacy Center Groups About Create Ad Create Page Developers Careers Cookies Ad choices Terms Help Contact Uploading & Non-Users Settings
      </motion.footer>
      <motion.footer
          initial={{
          x: -500,
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
      className='text-xs footer -mb-6 text-gray-500'>Meta 2023</motion.footer>
      
  </main>
  );
}

export default App;
