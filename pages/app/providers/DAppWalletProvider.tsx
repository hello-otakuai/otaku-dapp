import * as anchor from "@coral-xyz/anchor";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { AppKit, createAppKit, useAppKitAccount } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaDevnet, solanaTestnet } from "@reown/appkit/networks";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { usePageContext } from "vike-react/usePageContext";
import OtakuJournal from "@src/modules/otaku/otaku_journal";
import { getJouranlIdsAccount } from "@src/modules/otaku/utils";

export const DAPP_WALLET_PROVIDER_CONTEXT = createContext<AppKit | null>(null);

export const useDAppWalletProvider = () => {
    return useContext(DAPP_WALLET_PROVIDER_CONTEXT);
};

export default function DAppWalletProvider(
    { children }: { children: ReactNode },
) {
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

    const account = useAppKitAccount();
    useEffect(() => {
        if (account.address) {
            const provider = kit.getProvider("solana");
            console.log("Start...");

            OtakuJournal(
                new anchor.web3.Connection(
                    anchor.web3.clusterApiUrl("devnet"),
                    "confirmed",
                ),
                kit.getWalletProvider() as anchor.Wallet,
            ).then(async (program) => {
                console.log("connected..");
                const journalIDSAccountPDA = await getJouranlIdsAccount(
                    program,
                );
                console.log(journalIDSAccountPDA, program.provider.publicKey);

                const trackJournalIDSAccountBefore = await program.account
                    .trackJournalIDsAccount.fetch(
                        journalIDSAccountPDA,
                    );

                const currentJournalId = Number(
                    trackJournalIDSAccountBefore.currentJournalId,
                );
                const JOURNAL_BYTES = Buffer.alloc(8);

                JOURNAL_BYTES.write("otakujrn", 0, "utf-8");
                JOURNAL_BYTES.writeBigUInt64LE(BigInt(currentJournalId));

                const journalEntryPDA = anchor.web3.PublicKey
                    .findProgramAddressSync(
                        [Buffer.from("otakujrn"), JOURNAL_BYTES],
                        program.programId,
                    );

                const userAccountPDA = anchor.web3.PublicKey
                    .findProgramAddressSync(
                        [
                            Buffer.from("otaku_user"),
                            program.provider.publicKey!.toBuffer(),
                        ],
                        program.programId,
                    );

                program.methods.addJournalEntry(
                    new anchor.BN(900),
                    ["Meme"],
                    "",
                    { influencer: {} },
                    new anchor.BN(1e5),
                    "Bonk",
                ).accounts({
                    journalIdsAccount: journalIDSAccountPDA,
                    // userAccount: account.address!,
                    userAccount: userAccountPDA[0],
                    journalEntry: journalEntryPDA[0],
                })
                    .rpc();
            }); //.catch((err) => console.error(err));
        }
    }, [account]);

    return (
        <DAPP_WALLET_PROVIDER_CONTEXT.Provider value={kit}>
            {children}
        </DAPP_WALLET_PROVIDER_CONTEXT.Provider>
    );
}

interface X {
    token: string;
    amount: number;
    profit: number; // SIGNED
    motive: "news" | "pattern" | "influencer" | "sentiment" | "others";
    category: string[]; // "Memes", "L1" "AI Memes"
    comment: string;
}
