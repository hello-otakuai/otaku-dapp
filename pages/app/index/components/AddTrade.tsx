import { showAlertDialog, showDialog } from "@src/components/Dialog";
import { TextInput } from "@src/components/Input";

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
    return (
        <div className="flex flex-col gap-4 py-8 px-8">
            <div className="text-center py-3 font-bold text-lg">
                Add New Trade Entry
            </div>
            <TextInput placeholder="BTC" label="Token" name="token" />
            <TextInput placeholder="1,000" label="Amount" name="amount" />
            <TextInput placeholder="100" label="Profit / Loss" name="token" />
            <TextInput
                placeholder="I just felt like it"
                label="Comment"
                name="comment"
            />
            <button
                className="bg-primary w-full hover:bg-zinc-400 py-3 rounded-2xl my-4"
                onClick={() => {
                }}
            >
                {`Save`}
            </button>
        </div>
    );
};
