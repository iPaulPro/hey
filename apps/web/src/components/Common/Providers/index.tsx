import authLink from "@/helpers/authLink";
import { TRPCProvider, queryClient, trpcClient } from "@/helpers/trpc";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@hey/indexer/apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import ErrorBoundary from "../ErrorBoundary";
import PreferencesProvider from "./PreferencesProvider";
import Web3Provider from "./Web3Provider";

const lensApolloClient = apolloClient(authLink);

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
          <Web3Provider>
            <ApolloProvider client={lensApolloClient}>
              <PreferencesProvider />
              <ThemeProvider attribute="class" defaultTheme="light">
                {children}
              </ThemeProvider>
            </ApolloProvider>
          </Web3Provider>
        </TRPCProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Providers;
