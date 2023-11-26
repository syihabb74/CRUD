import React from 'react'
import Image from 'next/image'

export const Dashboard = ({name, age, images}) => {
  return (
    <div className='flex justify-center items-center w-1/4 h-1/4 bg-blue-500'>
        <div className='flex-col'>
            <div className='flex justify-center'>
                <p>test</p>
            </div>
            <div>
                <div>name: {name}</div>
                <div>age: {age}</div>
            </div>
        </div>
    </div>
  )
}
