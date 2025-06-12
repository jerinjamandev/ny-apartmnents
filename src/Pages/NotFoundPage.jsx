import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-pink-600 tracking-widest">404</h1>
      <div className="bg-pink-600 text-white px-2 text-sm rounded rotate-12 absolute mt-[-4rem]">
        Page Not Found
      </div>
      <p className="mt-6 text-lg text-gray-700">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow transition duration-300"
      >
        <FaArrowLeft className="mr-2" /> Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
