import { ReactNode, useRef } from "react";
import DAppWalletProvider from "./providers/DAppWalletProvider";
import Header, { NavMenu } from "./components/Header";
import { useAppKitAccount } from "@reown/appkit/react";
import InstalledAppsProvider from "./providers/InstalledAppsProvider";

export default function ({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const account = useAppKitAccount();
    return (
        <DAppWalletProvider>
            <InstalledAppsProvider>
                <div className="bg-primary text-white font-['Gothic_A1']">
                    <div className="md:max-w-screen-2xl mx-auto overflow-y-scroll md:overflow-y-hidden h-screen">
                        <Header />
                        <div className="p-4 flex gap-8">
                            <aside className="hidden md:block">
                                <NavMenu />
                            </aside>
                            <div
                                className="py-3 md:overflow-y-scroll md:h-[calc(100vh-90px)] md:px-4 w-full"
                                ref={ref}
                            >
                                {!account.address && (
                                    <div className="min-h-32 h-full w-full flex flex-col gap-4 justify-center items-center">
                                        <div>
                                            {`You're not signed in`}
                                        </div>
                                        <div>
                                            Please connect wallet to continue
                                        </div>
                                    </div>
                                )}
                                {account.address && children}
                            </div>
                        </div>
                    </div>
                </div>
            </InstalledAppsProvider>
        </DAppWalletProvider>
    );
}
