import { createContext, ReactNode, useContext } from "react";

const DAPP_WALLET_PROVIDER_CONTEXT = createContext({});

export const  useDAppWalletProvider = ()  => {
    return useContext(DAPP_WALLET_PROVIDER_CONTEXT)
}

export default function DAppWalletProvider({ children }: { children: ReactNode }) {
    return <>
        {children}
    </>
}