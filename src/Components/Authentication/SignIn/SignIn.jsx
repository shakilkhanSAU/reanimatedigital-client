import useFirebase from '../../../hooks/useFirebase';
import { styles } from '../../Home/Hero/Hero';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './SignIn.css'

import React from 'react';

const SignIn = () => {
    //custom title
    function componentDidMount() {
        document.title = 'ReAnimate | Sign In';
    }
    componentDidMount();



    // usehook for google signin
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <Navigation />
            <div className='flex justify-center items-center h-screen'>
                <div className='w-full max-w-md mt-20'>
                    {/* google signin method here */}
                    <div className='flex items-center justify-center'>
                        <button onClick={signInWithGoogle}>
                            {/* google image */}
                            <img className='w-10 h-10' src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                        </button>
                    </div>
                    <form className=' shadow-lg rounded px-12 pt-6 pb-8 mb-4'>
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold mb-2'>Sign In</h1>
                            <p className=' mb-4'>Please fill in this form to create an account!</p>
                        </div>
                        <div className='mb-4'>
                            <label className='block  text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' />
                        </div>
                        <div className='mb-6'>
                            <label className='block  text-sm font-bold mb-2' htmlFor='password'>
                                Password
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Enter Password' />
                            <p className='text-red-500 text-xs italic'>Please choose a password.</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>

                            <a className='inline-block align-baseline font-bold text-sm hover:text-red-600' href='/'>
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p className='text-center text-gray-500 text-xs'>
                        &copy;2023 ReAnimate. All rights reserved.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;