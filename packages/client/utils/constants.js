import { chain } from 'wagmi';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const API_URL = IS_PRODUCTION
  ? 'https://aakriti-api.vercel.app/api'
  : 'http://localhost:8000/api';

export const LENS_API_URL = 'https://api-mumbai.lens.dev';

export const ERROR_MESSAGE = 'Something went wrong!';

export const INFURA_ID = '8e7c4188c7c64f6c897556bae90d310a';

export const POLYGON_MUMBAI = {
  ...chain.polygonMumbai,
  name: 'Polygon Mumbai',
  rpcUrls: { default: ['https://rpc-mumbai.maticvigil.com'] },
};

export const CHAIN_ID = POLYGON_MUMBAI.id;
