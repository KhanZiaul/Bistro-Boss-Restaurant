import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const [showOrHide, setShowOrHide] = useState(true)
    const [color, setColor] = useState(true)
    const [captcha, setCaptcha] = useState(true)
    const [loginMessage, setLoginMessage] = useState('')

    const { signInUser, signInpopUp } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    function captchaHandler(event) {

        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setCaptcha(false)
        }

        else {
            setCaptcha(true)
        }
    }

    function formSubmit(e) {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;

        signInUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setLoginMessage('Successfully Login')
                setColor(true)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });

        e.target.reset()
    }

    function hideOrShowHandler() {
        setShowOrHide(!showOrHide)
    }



    function googleHandler() {
        signInpopUp(googleProvider)
            .then((result) => {
                const user = result.user;
                setLoginMessage('Successfully Login')
                setColor(true)
                if (user && user.email) {
                    const userDetails = { name: user.displayName, email: user.email }
                    fetch('http://localhost:7000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            
                        })
                }
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }

    function githubHandler() {
        signInpopUp(githubProvider)
            .then((result) => {
                const user = result.user;
                setLoginMessage('Successfully Login')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
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


                        <div className="flex items-center mt-4 mb-2">
                            < LoadCanvasTemplate />
                        </div>
                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input onBlur={captchaHandler} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your capta" name='captcha' aria-label="Full name" required />
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
                            <button disabled={captcha} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className='my-6 flex flex-col md:flex-row gap-5 justify-around'>
                        <div className='inline-block'>
                            <div onClick={googleHandler} className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
                                <FcGoogle></FcGoogle>
                                <span>Google Sign-in</span>
                            </div>
                        </div>

                        <div className='inline-block'>
                            <div onClick={githubHandler} className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
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