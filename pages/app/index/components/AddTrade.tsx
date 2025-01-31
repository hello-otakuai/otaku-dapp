import * as anchor from "@coral-xyz/anchor";
import { showAlertDialog, showDialog } from "@src/components/Dialog";
import { TextInput } from "@src/components/Input";
import { useDAppWalletProvider } from "../../providers/DAppWalletProvider";
import { getJouranlIdsAccount } from "@src/modules/otaku/utils";
import { useAppKitAccount } from "@reown/appkit/react";

const FIRST_ENTRY_KEY = "pro";
export default function AddTrade({ text = "Manual Entry" }: { text?: string }) {
    const showAddTrade = () => {
        if (!localStorage.getItem(FIRST_ENTRY_KEY)) {
            return showDialog(
                ({ closeFn }) => (
                    <div className="w-full p-4 flex flex-col gap-3 text-zinc-400">
                        <div className="text-zinc-100 space-x-3">
                            <span className="font-bold text-lg">
                                Greetings!
                            </span>
                            <span>
                                You about to take create your first journal
                                entry on
                            </span>
                            <span className="font-bold">
                                Otaku
                            </span>
                        </div>
                        <div className="font-semibold text-zinc-100 text-lg">
                            What you should know!
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Token
                                </div>
                                <div>
                                    The symbol of the Token (e.g BTC, ETH)
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Amount
                                </div>
                                <div>
                                    {`The amount of Token (X) traded, in case of PERP it's the size opened.`}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Profit / Loss
                                </div>
                                <div>
                                    How much was realized or lost on the trade.
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Motive
                                </div>
                                <div>
                                    Your reason for taking the trade
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Category
                                </div>
                                <div>
                                    Token category
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-zinc-200">
                                    Comment
                                </div>
                                <div>
                                    An optional field to remind your future self
                                    on what you did.
                                </div>
                            </div>
                        </div>
                        <button
                            className="bg-primary w-full hover:bg-zinc-400 py-3 rounded-2xl"
                            onClick={() => {
                                closeFn();
                                localStorage.setItem(FIRST_ENTRY_KEY, "1");
                                showAddTrade();
                            }}
                        >
                            {`Let's Go`}
                        </button>
                    </div>
                ),
                {},
            );
        }

        showDialog(({ closeFn }) => <AddEntryForm />, {});
    };

    return (
        <button
            className="text-sm rounded-2xl bg-secondary focus:bg-zinc-700 hover:bg-zinc-800 transition-all duration-300 px-4 py-2 border border-zinc-700"
            onClick={showAddTrade}
        >
            {text}
        </button>
    );
}

const AddEntryForm = () => {
    const account = useAppKitAccount();
    const ctx = useDAppWalletProvider();
    const onAddTrade = async () => {
        const otaku = ctx?.otaku;
        if (!otaku) {
            console.log(ctx);
            return;
        }
        let entries = await otaku.account.journalEntry.all();
        console.log(
            entries.filter((en) =>
                en.publicKey == new anchor.web3.PublicKey(account.address!)
            ),
        );
        console.log("connected..");
        const journalIDSAccountPDA = await getJouranlIdsAccount(
            otaku,
        );
        console.log(journalIDSAccountPDA, otaku.provider.publicKey);

        const trackJournalIDSAccountBefore = await otaku.account
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
                otaku.programId,
            );

        const userAccountPDA = anchor.web3.PublicKey
            .findProgramAddressSync(
                [
                    Buffer.from("otaku_user"),
                    otaku.provider.publicKey!.toBuffer(),
                ],
                otaku.programId,
            );

        otaku.methods.addJournalEntry(
            new anchor.BN(900),
            ["Meme"],
            "",
            { influencer: {} },
            new anchor.BN(1e5),
            "Bonk",
        ).accounts({
            journalIdsAccount: journalIDSAccountPDA,
            userAccount: account.address!,
            // userAccount: userAccountPDA[0],
            journalEntry: journalEntryPDA[0],
        })
            .rpc();
    };

    return (
        <div className="flex flex-col gap-4 py-8 px-8">
            <div className="text-center py-3 font-bold text-lg">
                Add New Trade Entry
            </div>
            <TextInput placeholder="SOL" label="Token" name="token" />
            <TextInput placeholder="50" label="Amount" name="amount" />
            <TextInput placeholder="100" label="Profit / Loss" name="token" />
            <TextInput
                placeholder="For the Love of Solana 💛"
                label="Comment"
                name="comment"
            />
            <button
                className="bg-primary w-full hover:bg-zinc-400 py-3 rounded-2xl my-4"
                onClick={onAddTrade}
            >
                {`Save`}
            </button>
        </div>
    );
};
