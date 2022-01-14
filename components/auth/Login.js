import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = '/';
      console.log(result);
    }
  };
  return (
    <form
      onSubmit={loginHandler}
      className=' flex flex-col gap-10 shadow-2xl w-1/2 mx-auto my-36 p-10 justify-items-center items-center'>
      <h1 className='text-lg font-semibold'>Login with credentials</h1>
      <input
        type='email'
        value={email}
        placeholder='Email'
        className='flex-grow border-b-2 w-1/2 shadow-lg outline-none'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={password}
        className='flex-grow border-b-2 outline-none w-1/2 shadow-lg'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type='submit'
        className='px-5 py-2 mx-5 rounded-md bg-primary-red text-primary-white w-20 flex'>
        <span>Login</span> <FiLogIn />
      </button>
    </form>
  );
};

export default Login;
