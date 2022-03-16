import Head from 'next/head'
import {FaFacebookF,FaLinkedinIn,FaGoogle,FaRegEnvelope} from 'react-icons/fa' 
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link'

export default function Signin(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 bg-gray-100">
      <Head>
        <title>Login/Sign-up Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold text-2xl'>
              Artisan's Gallery
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-600'>Log in to your Account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaFacebookF className='text-sm' /></a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaLinkedinIn className='text-sm' /></a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGoogle className='text-sm' /></a>
              </div>
              <p className='text-gray-500 my-3'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center'><FaRegEnvelope className='text-gray-400 m-2' />
                <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-3'><MdLockOutline className='text-gray-400 m-2' />
                <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='flex w-64 mb-5 mt-2 justify-between'>
                  <label className='flex items-center text-xs'><input type="checkbox" name = "remember" className='mr-1'/>Remember me</label>
                  <a href="#" className='text-xs '>Forgot Password?</a>
                </div>
                <a href="#" className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white'>Sign In</a>
              </div>
            </div>
          </div>
          <div className='w-2/5 bg-green-300 text-black font-semibold rounded-tr-2xl rounded-br-2xl px-2'>
            <div className='pt-4'>
              <h1 className='text-xl'>New User? Create an account</h1>
            </div>
            <p className='mt-4 text-base'>Fill up your personal information and start the journey with us</p>
            <Link href='/Signup'><a className='mt-4 border-2 border-black bg-black text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-300 hover:text-black'>Sign Up</a></Link>
            <div className='w-full border-2 border-black inline-block mb-2 mt-12'></div>
            <div className='mt-3 text-3xl'>
              Become a seller
            </div>
            <div>
              <ul className='mt-6'>
              <li>Live E-commerce</li>
              <li>Sell your products instantly</li>
              <li>Engage with your customers in real time</li>
              </ul>
            </div>
            <Link href='/SignupSell'><a className='mt-6 border-2 border-black bg-black text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-300 hover:text-black'>Sign Up</a></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

