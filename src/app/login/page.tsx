import React from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import Image from 'next/image'
import Login from '../assets/matrimonial_login.png'
import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
  return (
    <div className='bg-background h-screen md:px-12 px-1 md:py-2 flex items-center '>
        <div className="max-w-7xl w-full bg-[#84A98C] mx-auto  flex  sm:flex-row flex-col justify-center border-2 border-yellow-600 items-center h-max rounded-3xl">
      <div className="md:w-[40%] w-full  md:h-full  md:rounded-tl-3xl md:rounded-bl-lg ">
        <Image src={Login} alt="logo" width={450} height={300}  className="lg:h-full w-full h-96 rounded-tl-3xl md:rounded-bl-lg rounded-tr-3xl md:rounded-tr-none object-cover" />
      </div>
      <div className="md:w-[70%] w-full md:px-8 px-4 py-4 flex flex-col justify-start   h-full">
        {/* <div className={merienda.className}> */}
          <h1 className="text-5xl  uppercase font-bold">Login</h1>
        {/* </div> */}
        <p className="text-base mb-5 text-card-foreground">Welcome to Mourya Urja Matrimonial.</p>
        <p className="text-[.65rem] mb-2  text-card-foreground">Note*: Please Select your role first to login into Mourya Urja Matrimonial.</p>
        <div className="flex">
          <div className="bg-background md:px-6 px-3 py-2 shadow-sm rounded-t-md font-semibold text-primary">
            <IoCheckmarkDoneSharp className="inline-block mr-2"/>
            Admin</div>
          <div className="md:px-6 px-3 py-2 ">Management</div>
          <div className="md:px-6 px-3 py-2 ">User</div>
        </div>
        <LoginForm/>
        </div>
    </div>

       
    </div>
  )
}

export default LoginPage
