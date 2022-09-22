import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <header className='flex flex-col pt-3 shadow-md fixed top-0 left-0 right-0'>
       <NavBar></NavBar>
      </header>
      <main>
        <SideBar></SideBar>
      </main>
    
    </>

  )
}

function NavBar(){
  return (
    <>
      <nav className='group mx-3 mb-2 text-sm '>
        <div className='flex flex-row'>
          <button className='rounded-md mr-2 px-3 hover:bg-gray-200' type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <a className='text-xl font-mono my-auto'>
            LOGO
          </a>
          <form className='flex flex-1 relative m-auto'>
            <a className=' m-2 absolute '>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className =" m-auto w-5 h-5 stroke-gray-400">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>

            <input className='flex-1 bg-gray-200 rounded-md text-sm px-8 py-2' type='search' placeholder='Search'>
            </input>
          </form>
          <ul className='flex flex-row ml-2 '>
            <li className='ml-2 rounded-md bg-green-600 px-3 py-2 text-white m-auto'>
              <a>Add website</a>
            </li>
            <li className='ml-2 rounded-md bg-gray-200 px-3 py-2 m-auto'>
              <a>Sign in</a>
            </li>
            <li className='ml-2 rounded-md bg-gray-200 px-3 py-2 m-auto'>
              <a>Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='mx-3 my-3'>
        <div className='flex flex-row'>
          <div className='flex flex-row flex-1'>
            <DropDown name='Style'></DropDown>
            <DropDown name='Industry'></DropDown>
            <DropDown name='Type'></DropDown>
          </div>
          <div className='my-auto'>
            <DropDown name='Recently featured'></DropDown>

          </div>
        </div>
      </div>
    </>
  )
}

function DropDown({name}){
  const [value,setValue] = useState('hidden ');
  const [state,setState] = useState(false);
  function handleOnclick(){
    state == 'true'?setValue('hidden '):setValue('');
    state == 'true'?setState('false'):setState('true');
  }
  return (
    <div className='flex flex-row px-2 rounded-md hover:bg-gray-200 py-1 relative' role='button' onClick={handleOnclick}>
     {name}
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" mx-1 my-auto w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

      <ul className = {value.concat('z-10 left-0 top-8 absolute rounded-md shadow-md w-32 px-3 py-2 border border-gray-300 bg-gray-100')} >
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div> 
  )
}

function SideBar(){
  return (
    <div></div>
  )
}