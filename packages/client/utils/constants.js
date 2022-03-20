export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const API_URL = IS_PRODUCTION
  ? 'https://aakriti-api.vercel.app/api'
  : 'http://localhost:8000/api';
