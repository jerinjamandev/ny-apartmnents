import React from 'react';
import Logo from '../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer flex flex-col sm:flex-row sm:justify-between bg-gray-100 text-black p-10">
                {/* Logo and About */}
                <aside className="mb-6 sm:mb-0">
                    <img className="w-[150px] mb-4" src={Logo} alt="Logo" />
                    <p>
                        NY Apartment. <br />
                        Providing reliable tech since 2025
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p className="link link-hover">NY Apartment</p>
                    <p className="link link-hover">123 Main Street, New York, NY 10001</p>
                    <p className="link link-hover">Phone: +1 (212) 555-1234</p>
                    <p className="link link-hover">Email: info@nyapartment.com</p>
                </nav>


                {/* Terms & Policy */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

                {/* Social Media */}
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-xl hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="text-xl hover:text-sky-500" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-xl hover:text-red-600" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
