import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Logo from '../assets/logo.png';
import Image from 'next/image';
// import useUser from '../hooks/useUser';
// import Avatar from './Live/Avatar';
// import useLogout from '../hooks/useLogout';
import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import { useMoralisDapp } from '../context/MoralisDappProvider';
import UserAvatar from '../assets/avatar.png';
import {
  CHALLENGE_QUERY,
  AUTHENTICATE_MUTATION,
  CURRENT_USER_QUERY,
} from '../graphql/queries';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ethers } from 'ethers';
import consoleLog from '../utils/consoleLog';

// const unauthenticatedNav = [
//   { name: 'Explore', href: '/products' },
//   // { name: 'Become a seller', href: '/sellerSignup' },
// ];

// const authenticatedNav = [
//   { name: 'Cart', href: '/cart', role: ['user'] },
//   { name: 'Dashboard', href: '/dashboard/sellerDashboard', role: ['seller'] },
// ];

export default function Header() {
  // const { data: loggedInUser } = useUser();
  // const logout = useLogout();
  const router = useRouter();
  const {
    authenticate,
    isWeb3Enabled,
    enableWeb3,
    isWeb3EnableLoading,
    isAuthenticated,
    isAuthenticating,
    logout,
  } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  const [getChallenge, challengeData] = useLazyQuery(CHALLENGE_QUERY);
  const [mutateAuth, authData] = useMutation(AUTHENTICATE_MUTATION);

  const [getProfiles, { error: errorProfiles, loading: profilesLoading }] =
    useLazyQuery(CURRENT_USER_QUERY, {
      onCompleted(data) {
        consoleLog(
          'Lazy Query',
          '#8b5cf6',
          `Fetched ${data?.profiles?.items?.length} user profiles for auth`,
        );
      },
    });

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  }, [isAuthenticated, isWeb3Enabled]);
  // const handleLogout = () => {
  //   logout();
  //   router.push('/login');
  // };

  const handleLensLogin = async () => {
    if (!isAuthenticated) return;
    await getChallenge({
      variables: {
        request: {
          address: walletAddress,
        },
      },
    })
      .then(async res => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const signature = await signer.signMessage(res.data.challenge.text);

        const response = await mutateAuth({
          variables: {
            request: {
              address: walletAddress,
              signature,
            },
          },
        });
        if (response?.data?.authenticate) {
          console.log('ACCESS TOKEN', response?.data?.authenticate);
          localStorage.setItem(
            'accessToken',
            response?.data?.authenticate.accessToken,
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleConnect = async () => {
    await authenticate();
    await handleLensLogin();
  };
  const getAccountString = account => (
    <div className="flex items-center justify-content">
      <p className="mr-2 account-address">
        {account.slice(0, 5).toUpperCase()}. . . .
        {account.slice(-5).toUpperCase()}
      </p>
      <Image
        onClick={() => logout()}
        src={UserAvatar}
        className="cursor-pointer"
        alt="main-logo"
        width={40}
        height={40}
      />
    </div>
  );

  return (
    <Disclosure
      as="nav"
      className="bg-white absolute top-0 left-0  right-0 w-full z-20 text-black nav-bar"
    >
      {({ open }) => (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-between h-full">
              <div className="flex-shrink-0 flex items-center h-full">
                <div className="my-auto max-w-[115px] mt-4">
                  <Image
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                    src={Logo}
                    alt="main-logo"
                  />
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  {/* Search Bar */}
                  <div className="hidden relative mr-3 md:mr-0 md:block">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-adress-icon"
                      className="block p-1 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 "
                      placeholder="Search..."
                    />
                  </div>
                  <Link href="/products">
                    <span className="font-medium cursor-pointer">Explore</span>
                  </Link>
                  <Link href="/profile">
                    <span className="font-medium cursor-pointer">Profile</span>
                  </Link>
                  <Link href="/cart">
                    <span className="font-medium cursor-pointer">Cart</span>
                  </Link>

                  {isAuthenticating ? (
                    <div className="flex items-center justify-center ">
                      <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin" />
                    </div>
                  ) : (
                    isAuthenticated &&
                    walletAddress &&
                    getAccountString(walletAddress)
                  )}
                  {!isAuthenticated && !isAuthenticating && (
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handleConnect}
                    >
                      Connect Wallet
                    </button>
                  )}

                  {/* {loggedInUser
                    ? authenticatedNav.map(item => {
                        if (item.role.indexOf(loggedInUser.role) !== -1) {
                          return (
                            <Link href={item.href}>
                              <span className="font-medium cursor-pointer">
                                {item.name}
                              </span>
                            </Link>
                          );
                        }
                      })
                    : unauthenticatedNav.map(item => (
                        <Link href={item.href}>
                          <span className="font-medium cursor-pointer">
                            {item.name}
                          </span>
                        </Link>
                      ))} */}
                  {/* {loggedInUser && (
                    <Avatar
                      className="cursor-pointer"
                      onClick={handleLogout}
                      name={loggedInUser.name}
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
