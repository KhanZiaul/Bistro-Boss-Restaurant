import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
const Login = () => {

    const [showOrHide, setShowOrHide] = useState(true)
    const [color, setColor] = useState(true)
    const [loginMessage, setLoginMessage] = useState('')
    function formSubmit(e) {
        e.preventDefault()
     
    }

    function hideOrShowHandler() {
        setShowOrHide(!showOrHide)
    }


    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-8">LOGIN</h1>
            <div className='w-full md:w-2/4 mx-auto border-2 p-10 rounded-xl'>
                <form onSubmit={formSubmit}>
                    <div className='relative'>
                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" name='email' aria-label="Full name" required />
                        </div>

                        <div >
                            <div className="flex items-center border-b  border-slate-700 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type={showOrHide ? 'password' : 'text'} placeholder="Enter your password" aria-label="Full name" name='password' />
                            </div>

                            <div className='absolute top-16 right-4'>
                                {
                                    showOrHide ? <EyeIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                                        <EyeSlashIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className='my-6 flex justify-between flex-col md:flex-row items-center'>
                            <div>
                                <small>New to Bistro Boss Restaurant? <Link to='/register' className='text-blue-700 underline hover:text-blue-900'>Create New Account</Link></small>
                            </div>
                            <div>
                                <small><Link
                                    className='text-blue-700 underline hover:text-blue-900'>Forgot Password</Link></small>
                            </div>
                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{loginMessage}</p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className='my-6 flex flex-col md:flex-row gap-5 justify-around'>
                        <div  className='inline-block'>
                            <div className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
                                <FcGoogle></FcGoogle>
                                <span>Google Sign-in</span>
                            </div>
                        </div>

                        <div className='inline-block'>
                            <div className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
                                <FaGithub></FaGithub>
                                <span>GitHub Sign-in</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;