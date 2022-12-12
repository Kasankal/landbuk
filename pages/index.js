import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  let [triger,setTriger] = useState('-translate-x-60 ');
  
  function handleTriger(){
    
    triger == '-translate-x-60 '?setTriger(''): setTriger('-translate-x-60 ');
  }
  
  return (
    <>
      <header className='text-gray-600 flex flex-col pt-3 shadow-md fixed top-0 left-0 right-0 z-10 bg-white'>
       <NavBar triger={triger} handleTriger ={handleTriger}></NavBar>
      </header>
      <main className='mt-28  flex flex-row divide-x divide-gray-3 '>
        <SideBar triger={triger}></SideBar>
        <MainBody></MainBody>
      </main>
    </>

  )
}

function NavBar({triger,handleTriger}){
  return (
    <>
      <nav className='group mx-3 mb-2 text-sm z-50'>
        <div className=' justify-between flex flex-row'>
          <div className='flex flex-row'>
            <button className={'rounded-md mr-2 px-3 hover:bg-gray-200'} type='button' onClick={handleTriger}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <a className='text-xl font-mono my-auto text-black mr-3'>
              LOGO
            </a>            
          </div>

          <form className='hidden sm:flex flex-1 relative m-auto'>
            <a className=' m-2 absolute '>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className =" m-auto w-5 h-5 stroke-gray-400">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>

            <input className='flex-1 bg-gray-200 rounded-md text-sm px-8 py-2' type='search' placeholder='Search'>
            </input>
          </form>

          <ul className=' flex flex-row ml-2 '>
            <li className='ml-2 rounded-md bg-green-600 px-3 py-2 text-white m-auto' role='button'>
              <a>Add website</a>
            </li>
            <li className='hidden sm:flex ml-2 rounded-md bg-gray-200 px-3 py-2 m-auto' role='button'>
              <a>Sign in</a>
            </li>
            <li className='ml-2 rounded-md bg-gray-200 px-3 py-2 m-auto' role='button'>
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
          <div className='hidden sm:my-auto'>
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

function SideBar({triger}){
  return (
      <div className={triger+' fixed pt-6 z-10 shadow-xl px-5 w-60 h-96 font-mono text-lg text-gray-600 transition-transform ease-in-out duration-300 bg-white'}>
        <ul>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Websites</li>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Landings</li>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Portfolios</li>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Blogs</li>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Stores</li>
          <li className='rounded-md hover:bg-gray-200 px-3' role='button'>Other</li>
        </ul>
      </div>
  )
}

function MainBody(){
  return(
    <div className='px-10 sm:px-60 pt-10 flex flex-col z-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-10 text-sm text-gray-600'>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>
        <WebsiteCards></WebsiteCards>

      </div>
      <div className=' flex flex-col text-sm my-20 mx-auto'>
        <p className='text-xl text-center'>Sign up to view more websites.</p>
        <p>Browse through thousands of carefully selected inspirations. It&apos;s free.</p>
        <div className='mt-5 flex flex-col sm:flex-row'>
          <a role='button' className='rounded-md bg-green-600 p-2 mx-auto my-2 sm:ml-32'>Sign up</a>
          <a role='button' className='rounded-md bg-neutral-200 p-2 mx-auto my-2 sm:mr-32'>Sign in</a>
        </div>
      </div>
     <Footer></Footer>
    </div>
  )
}

function WebsiteCards(){
  return(
    <div className='shadow-xl hover:-translate-y-2 transition-transform ease-in-out duration-150'>
      <div className='divide-y divide-neutral-200  relative'>
        <div className='overflow-hidden'>
          <div className='flex flex-col hover:scale-125 transition-transform ease-in-out duration-150  hover:z-10'>
            <Image
            src ='/landbukSample1.webp'
            height={420}
            width={300}
            alt='sample'
            />
          </div>
        </div>

        <div className='flex flex-row p-2 z-50'>
          <p className='flex-1'>Verified 1 day ago</p>
          <svg role='button' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-gray-400 fill-gray-400 my-auto ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <p>5</p>

        </div>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <footer className='flex flex-col mb-20 border-t-2 border-gray-200 py-4'>
      <div>
        <div className='text-4xl font-mono'>LOGO</div>
      </div>
      <div>
        <div className='w-full'>
          <p>We collect awesome websites to help creatives find inspiration and motivation to do rad stuff.</p>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-6'>
        <div>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Advertise</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Privacy and terms</li>
            <li> Our Guidelines</li>
            <li>Yes, we use cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}