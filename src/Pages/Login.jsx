import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../Components/GoogleLoginButton ';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { FiEye, FiEyeOff } from 'react-icons/fi';
const Login = () => {
    const {LoginUser}=useContext(AuthContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log("Logged in user:", loggedUser);

                toast.success("Login successful!");
                form.reset();
                navigate("/"); // Redirect to homepage or dashboard
            })
            .catch((error) => {
                console.error(error.message);
                toast.error("Login failed: " + error.message);
            });
    };

    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-base-200">
                <div className="w-full max-w-sm rounded-lg bg-base-100 p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>

                        <div className="form-control mb-4 relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Enter your password" className="input input-bordered" />

                             <button
                                                        type="button"
                                                        tabIndex={-1}
                                                        className="absolute right-3 bottom-0 z-30 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                    >
                                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                                    </button>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>
                    <GoogleLoginButton></GoogleLoginButton>
                    <p className="mt-2 text-sm text-center">
                        Don't have an account? <Link to="/signup" className="text-blue-600 underline">SignUp</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;