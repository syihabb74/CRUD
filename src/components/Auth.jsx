"use client"

import React, { useState } from 'react';
import { handleLogin } from '@/logic/logicLoginPage';
import { useRouter } from 'next/navigation';

export const Auth = ({ isLoginOrReg }) => {
  const [userIsExist, setUserIsExist] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [image, setImage] = useState('');
  const router = useRouter();
  const { push } = router;

  async function handleRegisterClick() {

    try {
      const response = await fetch('https://v1.appbackend.io/v1/rows/TGhCyxkKr8Ap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{"name":name,"age":age,"attachment":image}])

      });

      if (response.ok) {
        alert('Register Successfully');
      } else {
        alert('Register Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function handleLoginClick() {
    const loginIsTrue = await handleLogin(name);

    if (loginIsTrue) {
      push('/dashboard');
      setUserIsExist(true);
    } else {
      alert('Password yang anda masukkan salah');
    }
  }

  if (isLoginOrReg) {
    return (
      <div className='text-black'>
        <h1 className='text-center mb-5 text-xl'>Login</h1>
        <div className='border-2 border-black p-5 rounded-lg'>
          <div className='p-1'>
            <p>Name :</p>
            <input
              type='text'
              placeholder='Input your name'
              className='p-1 border rounded-lg'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className='mx-auto block bg-indigo-500 hover:bg-indigo-600 mt-5 p-1 w-20 rounded-lg text-white'
            onClick={() => handleLoginClick()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='text-white'>
      <h1 className='text-center mb-5 text-xl'>Register Form</h1>
      <div className='border-2 border-black p-5 rounded-lg'>
        <div className='p-1'>
          <p>Username :</p>
          <input
            type='text'
            placeholder='Input your username'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='p-1'>
          <p>Age</p>
          <input
            type='text'
            placeholder='Input your age'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className='p-1'>
          <p>Input your image link</p>
          <input
            type='text'
            placeholder='Input your image link'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          className='mx-auto block bg-indigo-500 hover:bg-indigo-600 mt-5 p-1 w-20 rounded-lg text-white'
          onClick={() => {
            handleRegisterClick();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
