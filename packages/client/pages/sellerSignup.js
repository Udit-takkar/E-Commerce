/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaRegUser,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function SignupSell() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 bg-gray-100">
      {/* <Head>
        <title>Sign-up Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="py-3">
              <h2 className="text-3xl font-bold text-green-600">
                Create your Seller's Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2" />
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-black rounded-full p-1 mx-1 flex bg-blue-900"
                >
                  <span className="ml-3 mr-3 text-white font-semibold">
                    Signup with Facebook
                  </span>
                </a>
                <a
                  href="#"
                  className="border-2 border-black rounded-full p-1 mx-1 flex bg-blue-700"
                >
                  <span className="ml-3 mr-3 text-white font-semibold">
                    Signup with LinkedIn
                  </span>
                </a>
              </div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-black rounded-full p-1 mx-1 flex bg-white"
                >
                  <FaGoogle className="ml-2 mt-1" />
                  <span className="ml-3 mr-3 text-black font-semibold">
                    Signup with Google
                  </span>
                </a>
              </div>
              <p className="text-gray-500 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-1 flex items-center">
                  <FaRegUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="fname"
                    placeholder="Full Name"
                    className="bg-gray-100 outline-none text-sm flex-1 "
                  />
                </div>

                <div className="bg-gray-100 w-64 p-1 flex items-center mt-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-1 flex items-center mt-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                {/* <div className='bg-gray-100 w-64 p-1 flex items-center mt-3'><FaPhoneAlt className='text-gray-400 m-2' />
                <input type="tel" name="phone" placeholder='Phone Number' className='bg-gray-100 outline-none text-sm flex-1' />
                </div> */}
                <p className="text-sm mt-2 flex">
                  Already an existing user?
                  <Link href="Signin">
                    <a className="ml-2 font-medium font-serif">SignIn</a>
                  </Link>
                </p>
                <Link href="Signup">
                  <a className="ml-2 text-sm font-medium font-serif">
                    SignUp with user&apos;s account
                  </a>
                </Link>
                <button
                  type="button"
                  href="#"
                  className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white mt-3"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 font-helvetica text-white   bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-md text-center">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <h2 className="text-2xl">Welcome to Aakriti</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
