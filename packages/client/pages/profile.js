/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import consoleLog from '../utils/consoleLog';
import {
  CURRENT_USER_PROFILE_QUERY,
  CREATE_POST_TYPED_DATA,
} from '../graphql/queries';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useMoralisDapp } from '../context/MoralisDappProvider';
import clsx from 'clsx';
import { Card, CardBody } from '../components/Card';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'ipfs-http-client';
import { useRouter } from 'next/router';
import omitDeep from 'omit-deep';
import { ethers, utils } from 'ethers';

import {
  ChatAlt2Icon,
  PencilAltIcon,
  PhotographIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline';
import {
  GridItemEight,
  GridItemFour,
  GridLayout,
} from '../components/GridLayout';
import formatAddress from '../utils/formatAddress';
import humanize from '../utils/humaize';

const client = create('https://ipfs.infura.io:5001/api/v0');

function Slug({ slug, prefix, className = '' }) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-brand-600 dark:from-brand-400 to-pink-600 dark:to-pink-400 ${className}`}
    >
      {prefix}
      {slug}
    </span>
  );
}

function MyProfile() {
  const { walletAddress, chainId } = useMoralisDapp();
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const [description, setDescription] = useState('');
  //   Video
  const [videoUploading, setVideoUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [video, setVideo] = useState('');
  const [videoNftMetadata, setVideoNftMetadata] = useState({});
  const [mutatePostTypedData, typedPostData] = useMutation(
    CREATE_POST_TYPED_DATA,
  );
  const [feedType, setFeedType] = useState('post');
  const [getProfiles, { error: errorProfiles, loading: profilesLoading }] =
    useLazyQuery(CURRENT_USER_PROFILE_QUERY, {
      onCompleted(data) {
        consoleLog(
          'Lazy Query',
          '#8b5cf6',
          `Fetched ${data?.profiles?.items?.length} user profiles for auth`,
        );
      },
    });

  console.log('WALLET', walletAddress);
  useEffect(() => {
    if (walletAddress) {
      getProfiles({
        variables: { ownedBy: walletAddress },
      }).then(res => {
        if (res?.data?.profiles) {
          console.log(res?.data?.profiles.items[0]);
          setProfile(res?.data?.profiles.items[0]);
        }
      });
    }
  }, [walletAddress]);

  const videoUpload = async () => {
    try {
      setVideoUploading(true);
      const formData = new FormData();

      formData.append('fileName', selectedFile, selectedFile.name);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_UPLOAD_SERVER}/upload`,
        {
          method: 'POST',
          body: formData,
          mode: 'cors',
        },
      );
      const data = await response.json();

      // Get metadata
      const responseVidNftMetadata = await fetch(data.nftMetadataGatewayUrl, {
        method: 'GET',
      });
      const vidNftData = await responseVidNftMetadata.json();

      setVideoNftMetadata(vidNftData);

      setVideoUploading(false);
    } catch (err) {
      setVideoUploading(false);

      console.log(err);
    }
  };

  function FeedLink({ name, icon, type, count = 0 }) {
    return (
      <button
        type="button"
        onClick={() => {
          setFeedType(type);
        }}
        className={clsx(
          {
            'text-brand-500 bg-brand-100 dark:bg-opacity-20 bg-opacity-100 font-bold':
              feedType === type,
          },
          'flex items-center space-x-2 rounded-lg px-4 sm:px-3 py-2 sm:py-1 text-brand-500 hover:bg-brand-100 hover:text-brand-500 dark:hover:bg-opacity-20 hover:bg-opacity-100',
        )}
      >
        {icon}
        <div className="hidden sm:block">{name}</div>
        {count ? (
          <div className="px-2 text-xs font-medium rounded-full bg-brand-200">
            {humanize(count)}
          </div>
        ) : null}
      </button>
    );
  }

  const handleSubmit = async () => {
    const id = profile.id.replace('0x', '');
    const name = 'name';
    if (!description) return;

    let ipfsResult = '';

    if (videoNftMetadata.animation_url) {
      ipfsResult = await client.add(
        JSON.stringify({
          name: videoNftMetadata.name,
          description,
          content: description,
          external_url: null,
          // image: null,
          image: videoNftMetadata.image,
          imageMimeType: null,
          version: '1.0.0',
          appId: 'iris',
          attributes: [],
          media: [
            {
              item: videoNftMetadata.animation_url,
              type: 'video/mp4',
            },
          ],
          metadata_id: uuidv4(),
        }),
      );
    } else {
      ipfsResult = await client.add(
        JSON.stringify({
          name,
          description,
          content: description,
          external_url: null,
          image: null,
          imageMimeType: null,
          version: '1.0.0',
          appId: 'iris',
          attributes: [],
          media: [],
          metadata_id: uuidv4(),
        }),
      );
    }

    const createPostRequest = {
      profileId: profile.id,
      contentURI: `ipfs://${ipfsResult.path}`,
      collectModule: {
        revertCollectModule: true,
      },
      referenceModule: {
        followerOnlyReferenceModule: false,
      },
    };

    const res = await mutatePostTypedData({
      variables: {
        request: createPostRequest,
      },
    });

    const { typedData } = res.data.createPostTypedData;
    const { domain, types, value } = typedData;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const signature = await signer._signTypedData(
      omitDeep(domain, '__typename'),
      omitDeep(types, '__typename'),
      omitDeep(value, '__typename'),
    );

    const { v, r, s } = utils.splitSignature(signature);

    console.log('RES', res.data);
  };

  return (
    <div>
      <div
        className="h-52 sm:h-80"
        style={{
          backgroundImage: `url(
          https://res.cloudinary.com/dlkgzbtls/image/upload/v1650214099/profilecover_hrkbzw.svg 
          )`,
          backgroundColor: '#8b5cf6',
          backgroundSize: '30%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'repeat',
        }}
      />
      <GridLayout className="pt-6">
        <GridItemFour>
          <div className="px-5 mb-4 space-y-5 sm:px-0">
            <div className="relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-52 sm:h-52">
              <img
                src={profile?.picture?.original?.url}
                className="w-32 h-32 bg-gray-200 rounded-xl ring-8 ring-gray-50 sm:w-52 sm:h-52 dark:bg-gray-700 "
                alt={profile?.handle}
              />
            </div>
            <div className="py-2 space-y-1">
              <div className="flex gap-1.5 items-center text-2xl font-bold">
                <div className="truncate">
                  {profile?.name ?? profile?.handle}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {profile?.name ? (
                  <Slug slug={profile?.handle} prefix="@" />
                ) : (
                  <Slug slug={formatAddress(profile?.ownedBy)} />
                )}
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex gap-8">
                <button className="text-left" type="button">
                  <div className="text-xl">
                    {humanize(profile?.stats?.totalFollowing)}
                  </div>
                  <div className="text-gray-500">Following</div>
                </button>
                <button className="text-left" type="button">
                  <div className="text-xl">
                    {humanize(profile?.stats?.totalFollowers)}
                  </div>
                  <div className="text-gray-500">Followers</div>
                </button>
              </div>
              <button
                type="button"
                onClick={() => router.push('/meet')}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Go Live
              </button>
            </div>
          </div>
        </GridItemFour>
        <GridItemEight className="space-y-5">
          <div className="flex overflow-x-auto gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
            <FeedLink
              name="Posts"
              icon={<PencilAltIcon className="w-4 h-4" />}
              type="POST"
              count={profile?.stats?.totalPosts}
            />
            <FeedLink
              name="Comments"
              icon={<ChatAlt2Icon className="w-4 h-4" />}
              type="COMMENT"
              count={profile?.stats?.totalComments}
            />
            <FeedLink
              name="Mirrors"
              icon={<SwitchHorizontalIcon className="w-4 h-4" />}
              type="MIRROR"
              count={profile?.stats?.totalMirrors}
            />
            <FeedLink
              name="NFTs"
              icon={<PhotographIcon className="w-4 h-4" />}
              type="NFT"
            />
          </div>
          <Card>
            <CardBody>
              <form>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full h-[100px]"
                />
                <div className="w-full flex items-center justify-between mt-2 border-t pt-4">
                  {selectedFile ? (
                    <div className="flex items-center mr-2">
                      <p>File Selected</p>
                      <button
                        type="button"
                        onClick={videoUpload}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Upload
                      </button>
                    </div>
                  ) : (
                    <div className="file-input cursor-pointer">
                      <input
                        type="file"
                        id="file"
                        onChange={e => setSelectedFile(e.target.files[0])}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {videoUploading ? (
                      <p>Uploading... </p>
                    ) : (
                      <div className="flex items-center">
                        <PencilAltIcon className="w-4 h-4 mr-2" />
                        Post
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </CardBody>
          </Card>
        </GridItemEight>
      </GridLayout>
    </div>
  );
}

export default MyProfile;
