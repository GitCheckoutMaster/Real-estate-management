/* eslint-disable no-unused-vars */
import { FaGoogle } from 'react-icons/fa';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase/firebase.js';
import axios from 'axios';
import conf from '../conf/conf.js';

const GoogleAuth = () => {
    const handleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const res = await signInWithPopup(auth, provider);
            console.log(res);

            axios.post(`${conf.backendUrl}/user/google-register`, res.user, { withCredentials: true })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={handleClick} type="button" className='dark:bg-white text-xl rounded-lg w-full p-2.5 tracking-tighter hover:tracking-widest hover:font-semibold hover:duration-500 duration-500'>
                <span className='flex gap-4 justify-center'>
                    <FaGoogle className='h-7' />
                    <span className='flex items-center pb-1'>SIGN UP WITH GOOGLE</span>
                </span>
            </button>
        </div>
    );
};

export default GoogleAuth;