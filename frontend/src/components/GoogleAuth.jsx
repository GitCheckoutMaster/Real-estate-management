/* eslint-disable no-unused-vars */
import { FaGoogle } from 'react-icons/fa';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase/firebase.js';
import axios from 'axios';
import conf from '../conf/conf.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice.js'; 

const GoogleAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const res = await signInWithPopup(auth, provider);
            // console.log(res);

            axios.post(`${conf.backendUrl}/user/google-register`, res.user, { withCredentials: true })
                .then((res) => {
                    // console.log(res);
                    dispatch(login({ userData: res.data.data }))
                    navigate('/')
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
            <button onClick={handleClick} type="button" className='dark:bg-white text-xl bg-blue-400 rounded-lg w-full p-2.5 tracking-tighter hover:tracking-widest hover:font-semibold hover:duration-500 duration-500'>
                <span className='flex gap-4 justify-center'>
                    <FaGoogle className='h-7' />
                    <span className='flex items-center pb-1'>CONTINUE WITH GOOGLE</span>
                </span>
            </button>
        </div>
    );
};

export default GoogleAuth;