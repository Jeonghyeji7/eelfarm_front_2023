// import { useMemo } from 'react'
// import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
// import { onError } from '@apollo/client/link/error'
// import { concatPagination } from '@apollo/client/utilities'
// import merge from 'deepmerge'
// import isEqual from 'lodash/isEqual'
// import client from '../apollo-client';

// //https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// //https://www.youtube.com/watch?v=syV82gmnPbc
// //yarn add lodash deepmerge
// //yarn add -D @types/lodash 

// export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

// let apolloClient: ApolloClient<any>|null = null;

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     )
//   if (networkError) console.log(`[Network error]: ${networkError}`)
// })

// const httpLink = new HttpLink({
//   uri: 'https://localhost:3000/api/grapql', // Server URL (must be absolute)
//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
// })

// //스키마에 직접 연결하고 네트워크 지연을 절약

// function createApolloClient() {
//   return new ApolloClient({
//     //ssrMode가 서버에 있으면 true로 설정되고 그렇지 않으면 false로 설정
//     ssrMode: typeof window === 'undefined',
//     //http를 통해 네트워크를 통해 연결할때 필요한 링크
//     link: from([errorLink, httpLink]),
//     cache: new InMemoryCache(
//      //   {
//     //   typePolicies: {
//     //     Query: {
//     //       fields: {
//     //         allPosts: concatPagination(),
//     //       },
//     //     },
//     //   },

//     //}
//     ),
//   })
// }

// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient()

//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = _apolloClient.extract()

//     // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
//     const data = merge(existingCache, initialState, {
//       // combine arrays using object equality (like in sets)
//       arrayMerge: (destinationArray, sourceArray) => [
//         ...sourceArray,
//         ...destinationArray.filter((d) =>
//           sourceArray.every((s) => !isEqual(d, s))
//         ),
//       ],
//     })

//     // Restore the cache with the merged data
//     _apolloClient.cache.restore(data)
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient

//   return _apolloClient
// }

// export function addApolloState(client:ApolloClient<any>, pageProps:{props:any}) {
// //   if (pageProps?.props) {
//     pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
// //   }

//   return pageProps
// }

// export function useApollo(pageProps:any) {
//   const state = pageProps[APOLLO_STATE_PROP_NAME]
//   const store = useMemo(() => initializeApollo(state), [state])
//   return store
// }

