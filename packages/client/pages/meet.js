import React, { useState } from 'react';
import loadScript from '../utils/loadExternalScript';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import { v4 as uuidv4 } from 'uuid';

const sign = require('jwt-encode');

const JVB_JWT_ISS = process.env.NEXT_PUBLIC_JVB_JWT_ISS;
const JVB_SERVER = process.env.NEXT_PUBLIC_JVB_SERVER;
const JVB_JWT_APP_SECRET = process.env.NEXT_PUBLIC_JVB_JWT_APP_SECRET;
const JVB_JWT_AUD = process.env.NEXT_PUBLIC_JVB_JWT_AUD;
const JITSI_SERVER_DOMAIN = process.env.NEXT_PUBLIC_JITSI_SERVER_DOMAIN;
const RTMP_URL = process.env.NEXT_PUBLIC_RTMP_URL;

function Progress({ message, active }) {
  return (
    <div className={`loader-wrapper ${active ? 'is-active' : ''}`}>
      <Loader />
      <span className="dark-inverted mt-5">{message}</span>
    </div>
  );
}

export default function Meet() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const roomName = uuidv4();

  const generateJwt = () => {
    const data = {
      context: {
        user: {
          avatar: null,
          affiliation: 'owner',
        },
      },
      aud: JVB_JWT_AUD,
      iss: JVB_JWT_ISS,
      sub: JITSI_SERVER_DOMAIN,
      room: roomName,
    };
    const jwt = sign(data, JVB_JWT_APP_SECRET);
    return jwt;
  };

  const jitsiContainerStyle = {
    display: loading ? 'none' : 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999909999,
    backgroundColor: '#0d0415',
    color: '#fff',
  };

  function startConference(jwt) {
    try {
      const domain = JVB_SERVER;
      setLoading(false);
      const options = {
        width: '100%',
        roomName,
        parentNode: document.getElementById('jitsi-container'),
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          filmStripOnly: false,
        },
        configOverwrite: {
          disableSimulcast: false,
          dynamicBrandingUrl: process.env.NEXT_PUBLIC_BRANDING_URL,
        },
        jwt,
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.addEventListener('videoConferenceJoined', () => {
        setLoading(false);
        api.startRecording({
          mode: 'stream', // recording mode, either `file` or `stream`.
          rtmpStreamKey: RTMP_URL, // the LivePeer RTMP stream key. We are providing livepeer stream-key using env variable.
        });
      });
      api.addEventListener('videoConferenceLeft', () => {
        router.push('/');
      });
    } catch (error) {
      console.error('Failed to load Video API', error);
    }
  }
  const startMeeting = jwt => {
    if (window.JitsiMeetExternalAPI) startConference(jwt);
    else {
      loadScript(() => {
        startMeeting(jwt);
      });
    }
  };
  React.useEffect(async () => {
    const jwt = generateJwt();
    console.log(jwt);
    startMeeting(jwt);
  }, []);
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <div style={containerStyle}>
      {loading && (
        <Progress
          message="Please wait while we are connecting you to your meeting"
          active={loading}
        />
      )}
      <div id="jitsi-container" style={jitsiContainerStyle} />
    </div>
  );
}
