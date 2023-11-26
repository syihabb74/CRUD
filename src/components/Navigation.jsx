import Link from 'next/link'
import React from 'react'


export const Navigation = () => {
  return (
    <nav className='flex h-screen justify-center items-center'>
        <div className=' flex flex-col justify-center border-2 border-white rounded-lg h-1/4 w-1/3 text-center'>
            <div className='p-10'>
                <div  className='bg-violet-500 mb-10'>
                    <Link  href="/login" className='mx-auto block bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white' >
                        <button className='p-2 text-center'>Login</button>
                    </Link>
                </div>
                <div  className='bg-violet-500'>
                    <Link  href="/register" className='mx-auto block bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white'>
                        <button className='p-2 text-center'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
