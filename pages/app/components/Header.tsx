import Logo from "@src/components/Logo";
import { useEffect, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { navigate } from "vike/client/router";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { usePageContext } from "vike-react/usePageContext";

const LogBookBtn = () => {
    const ctx = usePageContext();
    const url = "/app";
    const isActive = ctx.urlPathname === url;

    return (
        <button onClick={() => navigate(url)}>
            <div
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl hover-bg-primary ${
                    isActive ? "bg-primary text-white" : "text-zinc-400"
                }`}
            >
                <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.0006 1.39999V4.99999C13.0006 5.66274 13.5378 6.19999 14.2006 6.19999H17.8006M6.40057 17V12.2M10.0006 17L10.0006 7.39999M13.6006 17V12.2M16.0006 3.19999C15.4665 2.72214 14.9123 2.15537 14.5624 1.78727C14.3296 1.54233 14.0079 1.39999 13.67 1.39999H4.60029C3.27481 1.39999 2.2003 2.4745 2.20029 3.79998L2.2002 18.1999C2.20019 19.5254 3.2747 20.5999 4.60019 20.5999L15.4002 20.6C16.7257 20.6 17.8002 19.5255 17.8002 18.2L17.8006 5.47783C17.8006 5.17099 17.6835 4.87603 17.4706 4.65513C17.0768 4.24664 16.4191 3.57451 16.0006 3.19999Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>
                    Logbook
                </span>
            </div>
        </button>
    );
};

const HeatMapBtn = () => {
    const ctx = usePageContext();
    const url = "/app/heatmap";
    const isActive = ctx.urlPathname === url;
    return (
        <button onClick={() => navigate(url)}>
            <div
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl hover-bg-primary ${
                    isActive ? "bg-primary text-white" : "text-zinc-400"
                }`}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17.625M12 21C7.02944 21 3 16.9706 3 12M12 21V17.625M3 12C3 7.02944 7.02944 3 12 3M3 12H6.375M12 3V6.375"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
                <span>
                    Heatmap
                </span>
            </div>
        </button>
    );
};

const AppsBtn = () => {
    const ctx = usePageContext();
    const url = "/app/apps";
    const isActive = ctx.urlPathname === url;
    return (
        <button onClick={() => navigate(url)}>
            <div
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl hover-bg-primary ${
                    isActive ? "bg-primary text-white" : "text-zinc-400"
                }`}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.50405 14.9919C7.887 14.9919 9.0081 16.113 9.0081 17.496C9.0081 18.8789 7.887 20 6.50405 20C5.1211 20 4 18.8789 4 17.496C4 16.113 5.1211 14.9919 6.50405 14.9919ZM6.50405 14.9919L6.50405 6.50405M16.5203 9.0081C17.9032 9.0081 19.0243 7.887 19.0243 6.50405C19.0243 5.1211 17.9032 4 16.5203 4C15.1373 4 14.0162 5.1211 14.0162 6.50405C14.0162 7.887 15.1373 9.0081 16.5203 9.0081ZM16.5203 9.0081L16.5203 13.4585C16.5203 15.6677 14.7294 17.4585 12.5203 17.4585L9.00937 17.4585"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
                <span>
                    Apps
                </span>
            </div>
        </button>
    );
};

const SenseiBtn = () => {
    const ctx = usePageContext();
    const url = "/app/sensei";
    const isActive = ctx.urlPathname === url;
    return (
        <button onClick={() => navigate(url)}>
            <div
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl hover-bg-primary ${
                    isActive ? "bg-primary text-white" : "text-zinc-400"
                }`}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.8239 2.4L16.6542 7.34621L21.6004 9.17647L16.6542 11.0067L14.8239 15.9529L12.9937 11.0067L8.04745 9.17647L12.9937 7.34621L14.8239 2.4Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.35333 13.6941L7.95216 16.0482L10.3063 17.6471L7.95216 19.2459L6.35333 21.6L4.75451 19.2459L2.40039 17.6471L4.75451 16.0482L6.35333 13.6941Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>
                    Sensei
                </span>
            </div>
        </button>
    );
};

const SettingsBtn = () => {
    const ctx = usePageContext();
    const url = "/app/settings";
    const isActive = ctx.urlPathname === url;
    return (
        <button onClick={() => navigate(url)}>
            <div
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl hover-bg-primary ${
                    isActive ? "bg-primary text-white" : "text-zinc-400"
                }`}
            >
                <Cog6ToothIcon />
                <span>
                    Settings
                </span>
            </div>
        </button>
    );
};

export const NavMenu = () => (
    <nav className="w-fit max-w-40 bg-secondary p-3 flex flex-col gap-2 justify-center rounded-3xl">
        <LogBookBtn />
        <HeatMapBtn />
        <AppsBtn />
        <SenseiBtn />
        {/* <SettingsBtn /> */}
    </nav>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between items-center py-4 sticky top-0 border-b md:border-0 border-zinc-500 p-4 bg-primary z-10">
            <Logo />
            <div className="flex gap-4 relative">
                <ConnectWalletButton />
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        width="28"
                        height="21"
                        viewBox="0 0 28 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 1.45068L26 1.45069M10.25 10.4507L26 10.4507M2 19.4507L26 19.4507"
                            stroke="#ADADAD"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <div className="md:hidden absolute right-0" hidden={!isOpen}>
                    <div
                        className="fixed h-screen w-screen left-0 right-0 top-0"
                        onClick={() => setIsOpen(false)}
                    />
                    <aside className="relative z-10">
                        <NavMenu />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export const ConnectWalletButton = () => {
    const account = useAppKitAccount();

    const updateBtnStyle = (el: HTMLElement | null) => {
        if (
            el && el.shadowRoot &&
            el.shadowRoot.children.length > 0 &&
            el.shadowRoot.children[0] &&
            el.shadowRoot.children[0].shadowRoot &&
            el.shadowRoot.children[0].shadowRoot.children.length > 0 &&
            el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot &&
            el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children
                    .length > 0 &&
            el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
                .children[0]
        ) {
            const stylesheet = document.createElement("style");
            stylesheet.innerHTML = `.r-p {
                    padding: 10px 30px !important;
                }
                @media(max-width: 500px) {
                    .r-p {
                        padding: 20px 30px !important;
                    }
                }
                `;
            el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
                .appendChild(stylesheet);
            (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
                .children[0] as HTMLButtonElement).style.background =
                    account.address ? "" : "#191919";
            (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
                .children[0] as HTMLButtonElement).classList.add("r-p");
        }
    };

    useEffect(() => {
        if (typeof window == "undefined") return;
        let el = globalThis.document.getElementById("reown-button");
        if (!el) return;
        updateBtnStyle(el);
    }, [account]);
    return <appkit-button id="reown-button" />;
};
