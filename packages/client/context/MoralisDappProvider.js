/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

const MoralisDappContext = React.createContext();

function MoralisDappProvider({ children }) {
  const { web3, Moralis, user } = useMoralis();
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    Moralis.onChainChanged(chain => {
      setChainId(chain);
    });

    const unsubscribe = Moralis.onAccountChanged(account => {
      console.log('changed', account);
      setWalletAddress(account);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => setChainId(web3?._network.chainId.toString() || null));
  useEffect(
    () =>
      setWalletAddress(
        // web3?.givenProvider?.selectedAddress || user?.get("ethAddress")
        user?.get('ethAddress'),
      ),
    [web3, user],
  );

  return (
    <MoralisDappContext.Provider
      value={{
        walletAddress,
        chainId,
      }}
    >
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);
  if (context === undefined) {
    throw new Error('useMoralisDapp must be used within a MoralisDappProvider');
  }
  return context;
}

export { MoralisDappProvider, useMoralisDapp };
