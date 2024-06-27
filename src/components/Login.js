import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInform,setIsSignInForm]=useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInform)

    }
  return (
    <div>
        <Header/>
        <div className='absolute'>     
            <img 
            className=''
            alt="img"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            />
        </div>
      <form className=' rounded-lg w-3/12 absolute p-12 bg-opacity-80 bg-black my-32 mx-auto right-0 left-0 text-white '>
      <h1 className='font-bold text-3xl py-3 cursor-pointer'>{isSignInform ? "Sign In":"Sign Up"}</h1>
      {!isSignInform && (
        <input className='p-2 my-2 w-full bg-gray-700' placeholder='Full Name' type='text'
        />
        )}
        <input className='p-2 my-2 w-full bg-gray-700' placeholder='emailAddress' type='text'></input>
        
        <input className='p-2 my-2 w-full bg-gray-700' placeholder='password' type='password'></input>
        <button className='p-2 my-2 w-full bg-red-700 rounded-lg cursor-pointer'>{isSignInform ? "Sign In":"Sign Up"}</button>
        <p className='my-6 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInform?"New to Netflix ? SignUp Now":"Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
