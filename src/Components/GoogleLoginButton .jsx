import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const { googleLogin } = useContext(AuthContext)
  const navigate=useNavigate()
  const handelGoogle = () => {
    googleLogin().then((result) => {
      toast.success(`Login Successful`)
      navigate('/')
    }).catch((error) => {
      toast.error(error)
    })
  }
  return (
    <div className='my-4'>
      <button
        onClick={handelGoogle}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FcGoogle size={20} />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
