import Logo from "@src/components/Logo";
import { useEffect, } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

export default function Header() {
    return <div className="flex justify-between items-center py-4 sticky top-0 border-b md:border-0 border-zinc-500 p-4" >
        <div className="flex gap-4">
            <button className="md:hidden">
                <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M2 1.45068L26 1.45069M10.25 10.4507L26 10.4507M2 19.4507L26 19.4507" stroke="#ADADAD" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </button>

            <Logo />
        </div>
        <ConnectWalletButton />
    </div>
}

export const ConnectWalletButton = () => {
    const account = useAppKitAccount();

    const updateBtnStyle = (el: HTMLElement | null) => {
        if (el && el.shadowRoot
            && el.shadowRoot.children.length > 0
            && el.shadowRoot.children[0]
            && el.shadowRoot.children[0].shadowRoot
            && el.shadowRoot.children[0].shadowRoot.children.length > 0
            && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
            && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children.length > 0
            && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0]) {
                const stylesheet = document.createElement('style');
                stylesheet.innerHTML = `.r-p {
                padding: 20px 30px !important;
                }
                @media(min-width: 769px) {
                    .r-p {
                        padding: 10px 30px;
                    }
                }
                `;
                (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot).appendChild(stylesheet);
            (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0] as HTMLButtonElement).style.background = "#191919";
            (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0] as HTMLButtonElement).classList.add("r-p");
        }
    }

    useEffect(() => {
        if (typeof window == 'undefined') return;
        let el = globalThis.document.getElementById("reown-button");
        if (!el) return;
        updateBtnStyle(el);
    }, [account])
    return <appkit-button id="reown-button" />
}