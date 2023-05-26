import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, logOut } = useContext(AuthContext)

    const [showOrHide, setShowOrHide] = useState(true)
    const [isCheck, setIsCheck] = useState(false)
    const [registerMessage, setRegisterMessage] = useState('')
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setRegisterMessage('Successfully Login')
                reset()
                logOut().then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
            });

    };


    function hideOrShowHandler() {

        setShowOrHide(!showOrHide)
    }

    function checkboxHandler(event) {

        setIsCheck(event.target.checked)
    }


    return (


        <div>
            <h1 className="text-4xl font-semibold text-center my-8">REGISTER</h1>
            <div className='w-full md:w-2/4 mx-auto border-2 p-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='relative'>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input {...register("name")} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your name" name='name' aria-label="Full name" required />
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input {...register("URL")} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your photoURL" name='URL' aria-label="Full name" />
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input {...register("email")} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" name='email' aria-label="Full name" required />
                        </div>

                        <div >
                            <div className="flex items-center border-b  border-slate-700 py-2">
                                <input {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/ })} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type={showOrHide ? 'password' : 'text'} placeholder="Enter your password" aria-label="Full name" name='password' />
                            </div>
                            {errors.password?.type === 'required' && <p role="alert" className='text-red-500 font-bold my-2'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500 font-bold my-2'>Password should be at least 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-500 font-bold my-2'>Password can not be more than 20 characters</p>}
                            {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-500 font-bold my-2'>Password can not be more than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500 font-bold my-2'>Password should contain one uppercase , one lower case and a number</p>}

                            <div className='absolute top-48 right-4'>
                                {
                                    showOrHide ? <EyeIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                                        <EyeSlashIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className='my-6 flex justify-between flex-col md:flex-row items-center'>
                            <div>
                                <small>Already have an account ? <Link to='/login' className='text-blue-700 underline hover:text-blue-900'>Login</Link></small>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input onClick={checkboxHandler} type="checkbox" className="checkbox checkbox-primary" />
                            <span>Accept <Link className=' text-blue-600 underline' to='/terms'>Terms and Conditions</Link> </span>
                        </div>
                        <p className='text-center my-3 font-bold text-red-500'>{registerMessage}</p>

                        <div className="form-control mt-6">
                            <button disabled={!isCheck} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;