import * as anchor from "@coral-xyz/anchor";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { AppKit, createAppKit, useAppKitAccount } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { usePageContext } from "vike-react/usePageContext";
import OtakuJournal from "@src/modules/otaku/otaku_journal";

export const DAPP_WALLET_PROVIDER_CONTEXT = createContext<
    {
        kit: AppKit | null;
        otaku: Awaited<ReturnType<typeof OtakuJournal>> | null;
    }
>({
    kit: null,
    otaku: null,
});

export const useDAppWalletProvider = () => {
    return useContext(DAPP_WALLET_PROVIDER_CONTEXT);
};

export default function DAppWalletProvider(
    { children }: { children: ReactNode },
) {
    const context = useDAppWalletProvider();

    const solanaWeb3JsAdapter = new SolanaAdapter({
        wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    });

    const projectId = usePageContext().config.credentials.REOWN_PROJECT_ID;

    const metadata = {
        name: "Otaku Journal",
        description: "Track your trade behaviour",
        url: "https://hellootaku.io",
        icons: ["https://hellootaku.io/favicon.svg"],
    };

    const kit = createAppKit({
        adapters: [solanaWeb3JsAdapter],
        networks: [solana, solanaTestnet, solanaDevnet],
        metadata: metadata,
        projectId,
        features: {
            email: true,
            socials: ["google", "x", "github", "apple"],
            emailShowWallets: true,
            analytics: true,
        },
        allWallets: "SHOW",
    });
    context.kit = kit;

    const account = useAppKitAccount();
    useEffect(() => {
        if (account.address) {
            const provider = kit.getProvider("solana");

            if (!context.otaku) {
                OtakuJournal(
                    new anchor.web3.Connection(
                        anchor.web3.clusterApiUrl("devnet"),
                        "confirmed",
                    ),
                    kit.getWalletProvider() as anchor.Wallet,
                ).then(async (program) => {
                    context!.otaku = program;
                    console.log("Initialized Otaku...");
                }).catch((err) => console.error(err));
            }
        }
    }, [account]);

    return (
        <DAPP_WALLET_PROVIDER_CONTEXT.Provider
            value={context}
        >
            {children}
        </DAPP_WALLET_PROVIDER_CONTEXT.Provider>
    );
}
