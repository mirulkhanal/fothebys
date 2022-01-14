import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser, clearErrors } from '../../redux/actions/userActions';
import Image from 'next/image';
import { BsCloudUpload } from 'react-icons/bs';
const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const { name, email, password, phone, address } = user;

  const [profileImage, setProfileImage] = useState('');
  const [imagePreview, setImagePreview] = useState('/images/default.png');
  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push('/login');
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, error, router]);

  const registerHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      phone,
      address,
      profile_image: profileImage,
    };

    dispatch(registerUser(newUser));
  };
  const fieldChangeHandler = (e) => {
    if (e.target.name === 'profile_image') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result);
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <form
      onSubmit={registerHandler}
      className='flex flex-col h-4/5 mx-auto justify-between items-center rounded-3xl w-4/12  p-4 m-4 shadow-2xl'>
      {imagePreview && (
        <Image
          src={imagePreview}
          width={100}
          height={100}
          alt='profile picture'
          className='rounded-full'
        />
      )}
      <input
        className='register-input'
        name='name'
        placeholder='Name'
        value={name}
        onChange={fieldChangeHandler}
      />
      <input
        className='register-input'
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={fieldChangeHandler}
      />
      <input
        className='register-input'
        name='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={fieldChangeHandler}
      />

      <input
        className='register-input'
        name='phone'
        type='text'
        placeholder='Phone number'
        value={phone}
        onChange={fieldChangeHandler}
      />
      <input
        className='register-input'
        name='address'
        type='text'
        placeholder='address'
        value={address}
        onChange={fieldChangeHandler}
      />
      <label className='rounded-lg px-4 py-2 cursor-pointer flex items-center gap-2 bg-primary-red text-primary-white font-medium'>
        <input
          type='file'
          name='profile_image'
          accept='image/*'
          onChange={fieldChangeHandler}
        />
        <BsCloudUpload /> <span>Upload image</span>
      </label>
      <button
        className='w-full text-lg text-center py-4 rounded-bl-lg rounded-br-lg font-extraboldcursor-pointer -2 bg-primary-gray-2 text-primary-white-2 font-medium'
        type='submit'
        disabled={loading ? true : false}>
        {loading ? 'Loading' : 'Register'}
      </button>
    </form>
  );
};

export default Register;
