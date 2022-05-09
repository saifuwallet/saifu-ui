import { TokenInfo } from '@solana/spl-token-registry';
import React, { useContext } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

interface SaifuUIProviderContextInterface {
  tokenMap: Map<string, TokenInfo>;
}

export const SaifuUIContext = React.createContext<SaifuUIProviderContextInterface>(
  {} as SaifuUIProviderContextInterface
);

export interface SaifuUIProviderProps {
  children: React.ReactNode;
  tokenMap: Map<string, TokenInfo>;
  queryClient: QueryClient;
}

export default function SaifuUIProvider({ children, tokenMap, queryClient }: SaifuUIProviderProps) {
  return (
    <SaifuUIContext.Provider
      value={{
        tokenMap,
      }}
    >
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {children}
      </QueryClientProvider>
    </SaifuUIContext.Provider>
  );
}
