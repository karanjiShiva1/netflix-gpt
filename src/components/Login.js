import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInform]=useState(true)

    const toggleSignInForm=()=>{
        setIsSignInform(!isSignInForm)

    }
  return (
    <div>
        <Header/>
<div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
    alt="bg-logo"/>
</div>
 <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
    <h1 className='font-bold text-3xl py-5'>{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm&&(<input type="text" placeholder='User Name' className='p-4 my-2 w-full bg-gray-700'/>)}
    <input type="text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700'/>
    <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-700'/>
    <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>

    <p className='py-4 cursor-pointer'onClick={toggleSignInForm} >{ isSignInForm? "New to NetFlix? Sign Up Now":"Already Registered? Sign In Now"}</p>
 </form>

    </div>
  )
}

export default Login
