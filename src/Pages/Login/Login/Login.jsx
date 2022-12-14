import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // console.log(from)
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = 'Login'
    }, []);

    const handleToLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                const currentUser = {
                    email: user.email
                }
                form.reset();

                fetch('https://photographer-server-theta.vercel.app/user/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Photography_Token', data.token)
                        toast.success('Successfully Login!')
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => console.error(err))
    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                fetch('https://photographer-server-theta.vercel.app/user/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('Photography_Token', data.token)
                        toast.success('Successfully Login!')
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero my-10">
                <div className='w-11/12 md:w-8/12 mx-auto'>
                    <div className="card flex-shrink-0 w-full shadow-2xl shadow-slate-500 pb-20">
                        <h1 className="text-5xl font-bold my-3 text-center text-blue-700">Login now!</h1>
                        <form onSubmit={handleToLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/resetPass'} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to genius car? Please  <Link className='text-primary font-bold' to={'/register'}>Register</Link></p>
                        <div className="form-control w-11/12 mx-auto mt-6">
                            <button onClick={handleLoginWithGoogle} className='btn btn-success'><FaGoogle className='mr-3' /> Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;