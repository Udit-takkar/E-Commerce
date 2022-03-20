/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import Fire from '../assets/fire.png';
import Head from 'next/head';
import { useRouter } from 'next/router';

const sampleEvents = [
  {
    name: 'Org Interest Meet',
    location: 'Block 1',
    time: 'March 24th at 10:00 AM',
    class:
      'bg-gradient-to-r mr-5 mb-5 w-[300px] h-[200px] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
  },
  {
    name: 'Handloom Bag',
    location: 'Bihar',
    time: 'March 24th at 05:00 PM',
    class:
      'bg-gradient-to-r mr-5 mb-5 w-[300px] h-[200px] from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
  },
  {
    name: 'Home decor',
    location: 'Block 1',
    time: 'March 24th at 10:00 AM',
    class:
      'bg-gradient-to-r mr-5 mb-5 w-[300px] h-[200px] from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
  },
  {
    name: 'Kitchen Ware',
    location: 'Block 1',
    time: 'March 24th at 10:00 AM',
    class:
      'bg-gradient-to-r mr-5 mb-5 w-[300px] h-[200px] from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
  },
  {
    name: 'Bamboo',
    location: 'Block 1',
    time: 'March 24th at 10:00 AM',
    class:
      'bg-gradient-to-r mr-5 mb-5 w-[300px] h-[200px]  from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-centerr',
  },
];

function LiveEvents() {
  const router = useRouter();
  const joinRoom = () => {
    router.push('/livestage');
  };
  return (
    <div className="header-landing">
      <Head>
        <title>Artify Live Events</title>
        <meta name="description" content="e commerce platform for artisans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-black h-48 rounded-3xl overflow-hidden bg-cover bg-center">
        <iframe
          title="banner"
          className="absolute top-0 bottom-0 translate-x-2 right-0 h-full w-96"
          src="https://iframe.videodelivery.net/482971ffc3e00bbfae8192a3753bcf28?muted=true&preload=auto&loop=true&autoplay=true&controls=false"
        />
        <div className=" bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-3xl text-white font-bold">
              Buy, Sell,
              <span style={{ color: 'rgb(20, 110, 180)' }}> Go Live!</span>
            </h2>
            <h2 className="text-2xl text-white font-semibold mt-4">
              The Community Marketplace
            </h2>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-5 ml-2.5 mb-4">Scheduled Events</h1>
        <div className="flex flex-wrap mt-2">
          {sampleEvents.map(event => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div className={event.class} onClick={joinRoom} key={event.name}>
              <div className="flex items-center justify-between ">
                <div>
                  <Image src={Fire} alt="fire-icon" height={40} width={30} />
                </div>
                <div className="flex -space-x-1  bg-transparent">
                  {[
                    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  ].map(i => (
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
                      src={i}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div className="text-white text-left mt-10">
                <h3 className="text-md font-thin">{event.time}</h3>
                <h2 className="text-2xl">{event.name}</h2>
                <h3 className="text-lg font-thin">{event.location}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveEvents;
