import React from 'react'
import {Link} from 'react-router-dom'
import Links from './Links'
import Search from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-5 flex flex-wrap bg-slate-800 justify-center border-b dark:border-gray-200 border-slate-700'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to="">
            <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
              Goggle🔎
            </p>
          </Link>
          <button type='button' onClick={()=> setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-3 py-1 hover:shadow-lg'>
              { darkTheme ? 'Light 💡' : 'Dark 🌙'}
          </button>
        </div>
        <Search/>
        <Links/>
    </div>
  )
}
