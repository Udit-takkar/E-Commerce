import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { LENS_API_URL, ERROR_MESSAGE } from './utils/constants';

// const REFRESH_AUTHENTICATION_MUTATION = `
//   mutation Refresh($request: RefreshRequest!) {
//     refresh(request: $request) {
//       accessToken
//       refreshToken
//     }
//   }
// `;

const httpLink = new HttpLink({
  uri: LENS_API_URL,
  fetch,
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('accessToken');
  console.log('jwt token:', token);

  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
