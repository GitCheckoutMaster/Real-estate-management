/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import conf from '../conf/conf.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice.js';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (data) => {
        try {
            axios.post(`${conf.backendUrl}/user/register`, data, { withCredentials: true })
                .then((res) => {
                    if (res.status === 200) {
                        navigate('/login');
                        dispatch(login({ userData: res.data }));
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.response.status);
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className='bg-gray-50 dark:bg-gray-500'>
            <div className='flex flex-col gap-2 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <Link to="/">
                    <span className='text-4xl font-semibold text-white'>Real</span>
                    <span className='text-4xl font-bold text-blue-300'>Estate</span>
                </Link>
                <div className='w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                        Create an Account
                    </h1>
                    {
                        error &&
                        <div className='text-red-600'>
                            {error === 403 ? "User already exists" : window.location.reload}
                        </div>
                    }
                    <form onSubmit={handleSubmit(submitHandler)} className='space-y-4 md:space-y-6'>
                        <div>
                            <label className='block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                            <input {...register("name", { required: true })} type="text" className='bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' placeholder='Jay Mistry' />
                        </div>
                        <div>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6'>Your email</label>
                            <input {...register("email", { required: true })} type="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' placeholder='name@company.com' />
                        </div>
                        <div>
                            <label className='block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white'>Your password</label>
                            <input {...register("password", { required: true })} type="password" className='bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' placeholder='••••••••' />
                        </div>
                        <div>
                            <button type="submit" className='dark:bg-gray-400 text-xl rounded-lg w-full p-2.5 tracking-tighter hover:tracking-widest hover:font-semibold hover:duration-500 duration-500 mt-4'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
