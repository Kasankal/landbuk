import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <header className='flex flex-col pt-3'>
      <NavBar ></NavBar>
    </header>

  )
}

function NavBar(){
  return (
    <>
      <nav className='group mx-3'>
        <div className='flex flex-row'>
          <button className='rounded-md mr-2 px-3 hover:bg-gray-200' type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <a className='text-xl font-mono my-auto'>
            LOGO
          </a>
          <form className='flex flex-1 '>
            <input className='flex-1 bg-gray-200 rounded-md text-sm px-2 py-2' type='search' placeholder='Search'>
            </input>
          </form>
          <ul className='flex flex-row ml-2 '>
            <li className='ml-2 rounded-md bg-green-500 px-3 py-1 text-white m-auto'>
              <a>Add website</a>
            </li>
            <li className='ml-2 rounded-md bg-gray-200 px-3 py-1 m-auto'>
              <a>Sign in</a>
            </li>
            <li className='ml-2 rounded-md bg-gray-200 px-3 py-1 m-auto'>
              <a>Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </>
  )
}

