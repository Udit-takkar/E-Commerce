import React, { useEffect } from 'react';
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom,
} from '@100mslive/react-sdk';
import Live from '../components/LiveFeature';
import Sidebar from '../components/Live/SideBar';

function LiveStage() {
  const actions = useHMSActions();
  const stage = {
    id: '42706',
    name: 'Stage A',
    slug: 'a',
    stream: 'https://www.youtube.com/embed/1-NzQ9ObsfM',
    discord: 'https://discord.com',
    schedule: [
      {
        title: 'Keynote',
        end: '2020-10-27T09:30:00-07:00',
        start: '2020-10-27T09:00:00-07:00',
        speaker: [
          {
            name: 'Christa Collyn',
            slug: 'christa',
            image: {
              url: 'https://www.datocms-assets.com/65060/1605540619-photo-1494790108377-be9c29b29330.jpeg?fit=crop&fm=jpg&h=120&w=120',
              blurDataURL:
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChULDhUQDg0UDhMdHhYWFxYoGCIfIhUaHysjHSIoIhoWJDUxKC4vMjIyHSI4PTcwPCsxPjsBCgsLDg0CHBAQHDsoIig7Ozs7Lzs7Ly87Ozs1Ozs7Lzs7Ozs7Ozs7Lzs7Oy87Ozs7Ozs7LzsvLzU1Oy87NS87L//AABEIABgAEAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAADBAAFBv/EAB4QAAEEAgMBAAAAAAAAAAAAAAEAAgMRBDESFXEF/8QAFQEBAQAAAAAAAAAAAAAAAAAABAP/xAAcEQACAQUBAAAAAAAAAAAAAAABEQASExYlJgb/2gAMAwEAAhEDEQA/AGp92gSyAspAys1oZdqv7BrjtRe1UTZ52qZbN+4+Q8GO9KU7WSFhJNqKKgAyeMJXjFP/2Q==',
            },
          },
        ],
      },
    ],
  };
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const handleJoin = () => {
    actions.join({
      userName: 'Udit',
      authToken: process.env.NEXT_PUBLIC_HOST_TOKEN,
      initEndpoint: process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined,
      rememberDeviceSelection: true,
    });
  };

  return (
    <div className="header-landing bg-gray-100">
      <div>
        {isConnected ? (
          <div className="w-full h-full flex items-center">
            <div className="flex-[0.75]">
              <Live />
            </div>
            <div className="flex-[0.25] my-auto bg-white ml-4">
              <Sidebar />
            </div>
          </div>
        ) : (
          <button type="button" onClick={handleJoin}>
            Join the event
          </button>
        )}
      </div>
    </div>
  );
}

export default LiveStage;
