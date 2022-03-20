import { useHMSStore, selectLocalPeerRole } from '@100mslive/react-sdk';
import React from 'react';
import Chat from './Chat';
// import Participants from './Participants';
// import ScheduleSidebar from '@components/schedule-sidebar-individual';
import * as Tabs from '@radix-ui/react-tabs';

function Sidebar({ allStages }) {
  const localRole = useHMSStore(selectLocalPeerRole);
  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container text-black">
        <Tabs.List className="w-full px-4 tabs">
          <Tabs.Trigger asChild value="1">
            <button
              type="button"
              className="w-full  h-[35px] text-[14px] border-solid border rounded-l-md"
              style={{ border: '1px solid #d8d8d8' }}
            >
              Chat
            </button>
          </Tabs.Trigger>

          {/* {localRole?.name === 'viewer' || localRole?.name === 'invitee' ? (
            <Tabs.Trigger asChild value="3">
              <button
                type="button"
                className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md"
              >
                Schedule
              </button>
            </Tabs.Trigger>
          ) : (
            <Tabs.Trigger asChild value="2">
              <button
                type="button"
                className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md"
              >
                Participants
              </button>
            </Tabs.Trigger>
          )} */}
        </Tabs.List>
        <Tabs.Content asChild value="1">
          <Chat />
        </Tabs.Content>
        {/* <Tabs.Content asChild value="2"> */}
        {/* <Participants />  */}
        {/* </Tabs.Content> */}
        {/* <Tabs.Content asChild value="3">
          <ScheduleSidebar allStages={allStages} />
        </Tabs.Content> */}
      </div>
    </Tabs.Root>
  );
}

export default Sidebar;
