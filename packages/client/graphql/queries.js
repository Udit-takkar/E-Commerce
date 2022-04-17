import { gql } from '@apollo/client';

export const MinimalProfileFields = gql`
  fragment MinimalProfileFields on Profile {
    id
    name
    handle
    bio
    ownedBy
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    followModule {
      __typename
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUser($ownedBy: [EthereumAddress!]) {
    profiles(request: { ownedBy: $ownedBy }) {
      items {
        ...MinimalProfileFields
        isDefault
      }
    }
  }
  ${MinimalProfileFields}
`;

export const CURRENT_USER_PROFILE_QUERY = gql`
  query currentUserProfile($ownedBy: [EthereumAddress!]) {
    profiles(request: { ownedBy: $ownedBy }) {
      items {
        id
        handle
        ownedBy
        name
        location
        website
        twitterUrl
        bio
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
        }
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        coverPicture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        followModule {
          __typename
        }
      }
    }
  }
`;

export const CREATE_POST_TYPED_DATA = gql`
  mutation ($request: CreatePublicPostRequest!) {
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleData
          referenceModule
          referenceModuleData
        }
      }
    }
  }
`;

export const CHALLENGE_QUERY = gql`
  query Challenge($request: ChallengeRequest!) {
    challenge(request: $request) {
      text
    }
  }
`;

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`;

// export const PROFILE_FEED_QUERY = gql`
//   query ProfileFeed($request: PublicationsQueryRequest!) {
//     publications(request: $request) {
//       items {
//         ... on Post {
//           ...PostFields
//         }
//         ... on Comment {
//           ...CommentFields
//         }
//         ... on Mirror {
//           ...MirrorFields
//         }
//       }
//       pageInfo {
//         next
//       }
//     }
//   }
//   ${PostFields}
//   ${CommentFields}
//   ${MirrorFields}
// `;
