import { useEffect, useRef, useState } from "react";
import AppList from "./components/AppList";
import driftLogo from "@assets/images/apps/drift_protocol.svg";
import { showDialog } from "@src/components/Dialog";
import SearchBar from "./components/SearchBar";

const HIDE_TUT = "_aps_pro";

export default function () {
    const [apps, setApps] = useState<{}[]>([]);
    const [loading, setLoading] = useState(false);
    const isPro = () => !!localStorage.getItem(HIDE_TUT);

    const [_, updateState] = useState(0);

    useEffect(() => {
        if (!isPro()) {
            setTimeout(() => {
                showDialog(({ closeFn }) => (
                    <Tutorial
                        fn={() => {
                            updateState((prev) => prev + 1);
                            closeFn();
                        }}
                    />
                ), { dismissable: false });
            }, 1000);
        }
    }, []);

    return (
        <div>
            <SearchBar />
            <AppList />
        </div>
    );
}

const Tutorial = ({ fn }: { fn: VoidFunction }) => {
    const ref = useRef<HTMLInputElement>(null);
    const onContinue = () => {
        localStorage.setItem(HIDE_TUT, ref.current?.checked ? "1" : "");
        fn();
    };

    return (
        <div>
            <div className="text-zinc-200 p-4">
                <div className="">
                    Hello welcome to <span className="font-bold">Apps</span>
                </div>
                <div>
                    To automatically log your trade entry from Popular protocol
                    <img src={driftLogo} />
                </div>
                <label htmlFor="hide">
                    <input ref={ref} type="checkbox" name="hide" id="hide" />
                    <p>
                        {`Don't show this again`}
                    </p>
                </label>
                <button
                    className="bg-secondary px-12 py-2 hover:bg-zinc-800 focus:bg-zinc-900 rounded-3xl"
                    onClick={onContinue}
                >
                    Let's Go!
                </button>
            </div>
        </div>
    );
};
