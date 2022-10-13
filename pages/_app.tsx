import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

//https://lightrun.com/answers/apollographql-apollo-client-invariant-violation-could-not-find-client-in-the-context-or-passed-in-as-an-option-wrap-the-root

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
