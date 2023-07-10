import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Layout from "@/Layouts/Layout";
import Dashboard from "@/Layouts/Dashboard";
import { GET_ME } from '../graphQl/Query/users'

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ApolloProvider client={client}>
      {pathname == "/dashboard" ? (
        <Layout>
          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
        </Layout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
}
