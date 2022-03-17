/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { useState, useCallback } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from 'next/link';
import { AuthServices } from '../services/AuthServices';
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { autoLogin } from '../utils/auth';

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    const { token } = await AuthServices.login(email, password);
    autoLogin(token);
    mutate('/api/me');
  };

  const onSubmit = async () => {
    if (email === '' || password === '') return;
    try {
      await login();
      router.push('/');
    } catch (err) {
      console.log('Login', err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 bg-gray-100">
      <Head>
        <title>Login/Sign-up Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-2xl">
              Artisan's Gallery
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-600">
                Log in to your Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2" />
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-500 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mt-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex w-64 mb-5 mt-2 justify-between">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs ">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="button"
                  onClick={onSubmit}
                  className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 font-helvetica text-white   bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-md text-center" />
        </div>
      </main>
    </div>
  );
}
