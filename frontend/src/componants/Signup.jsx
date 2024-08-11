/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    return (
        <section className='bg-gray-50 dark:bg-gray-500'>
            <div className='flex flex-col gap-2 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <Link to="/">
                    <span className='text-2xl font-semibold text-white'>Real</span>
                    <span className='text-2xl font-bold text-blue-300'>Estate</span>
                </Link>
                <div className='w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                        Create an Account
                    </h1>
                    <form onSubmit={handleSubmit(submitHandler)} className='space-y-4 md:space-y-6'>
                        <div>
                            <label className='block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white'>First name</label>
                            <input {...register("firstName", { required: true })} type="text" className='bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' placeholder='Jay' />
                        </div>
                        <div>
                            <label className='block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white'>Last name</label>
                            <input {...register("lastName", { required: true })} type="text" className='bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' placeholder='Mistry' />
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
                            <button type="submit" className='dark:bg-gray-400 rounded-lg w-full p-2.5 tracking-tighter hover:tracking-widest hover:font-semibold hover:duration-500 duration-500'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
