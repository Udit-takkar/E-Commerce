import { ethers } from 'ethers';

export const ethersProvider = new ethers.providers.Web3Provider(
  window.ethereum,
);

export const getSigner = () => ethersProvider.getSigner();

// export const lensHub = new ethers.Contract(
//   LENS_HUB_CONTRACT_ADDRESS,
//   LENS_HUB_ABI,
//   getSigner(),
// );
