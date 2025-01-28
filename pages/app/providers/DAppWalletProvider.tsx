import { createContext, ReactNode, useContext } from "react";
import { AppKit, createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { usePageContext } from "vike-react/usePageContext";

export const DAPP_WALLET_PROVIDER_CONTEXT = createContext<AppKit | null>(null);

export const useDAppWalletProvider = () => {
    return useContext(DAPP_WALLET_PROVIDER_CONTEXT)
}

export default function DAppWalletProvider({ children }: { children: ReactNode }) {
    const solanaWeb3JsAdapter = new SolanaAdapter({
        wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
    })

    const projectId = usePageContext().config.credentials.REOWN_PROJECT_ID

    const metadata = {
        name: 'Otaku Journal',
        description: 'Track your trade behaviour',
        url: 'https://hellootaku.io',
        icons: ['https://hellootaku.io/favicon.svg']
    }

    const kit = createAppKit({
        adapters: [solanaWeb3JsAdapter],
        networks: [solana, solanaTestnet, solanaDevnet],
        metadata: metadata,
        projectId,
        features: {
            email: true,
            socials: ['google', 'x', 'github', 'apple',],
            emailShowWallets: true,
            analytics: true
        },
        allWallets: 'SHOW',
    });

    return <DAPP_WALLET_PROVIDER_CONTEXT.Provider value={kit}>
        {children}
    </DAPP_WALLET_PROVIDER_CONTEXT.Provider>
}