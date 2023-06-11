import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "@/Layouts/Layout";
import Dashboard from "@/Layouts/Dashboard";



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ApolloProvider client={client}>
      {pathname == "/dashboard" ? (
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
}
