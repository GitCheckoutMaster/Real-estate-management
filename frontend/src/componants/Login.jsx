import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className='mb-3'>
                    <span className='text-4xl font-semibold text-white'>Real</span>
                    <span className='text-4xl font-bold text-blue-300'>Estate</span>
                </Link>
                <div className='w-full bg-white rounded-lg shsadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Sign in to your Account
                        </h1>
                        <form className='space-y-4 md:space-y-6'>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white leading-tight'>Your email</label>
                                <input className='rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-white focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white leading-tight'>Your password</label>
                                <input className='rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-white focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="password" />
                            </div>
                            <div className='text-gray-900 dark:text-white flex justify-between text-sm font-medium leading-tight'>
                                <div className='flex gap-2'>
                                    <div>
                                        <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                                    </div>
                                    <div>
                                        <label>Remember me</label>
                                    </div>
                                </div>
                                <Link>Forgot password?</Link>
                            </div>
                            <button type="submit" className='dark:bg-blue-500 text-xl rounded-lg w-full p-2.5 tracking-tighter hover:tracking-widest hover:font-semibold hover:duration-500 duration-500 '>Sign in</button>
                            <div className='text-gray-900 dark:text-white text-md font-medium tracking-wide'>
                                Dont have an account yet? <Link to="/signup">Create one</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
