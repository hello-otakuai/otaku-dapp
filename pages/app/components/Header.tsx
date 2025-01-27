import Logo from "@src/components/Logo";
import { DAPP_WALLET_PROVIDER_CONTEXT } from "../providers/DAppWalletProvider";
import { useEffect, } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

const updateBtnStyle = (el: HTMLElement | null) => {
    if (el && el.shadowRoot
        && el.shadowRoot.children.length > 0
        && el.shadowRoot.children[0]
        && el.shadowRoot.children[0].shadowRoot
        && el.shadowRoot.children[0].shadowRoot.children.length > 0
        && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot
        && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children.length > 0
        && el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0]) {
        (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0] as HTMLButtonElement).style.background = "#191919";
        (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0] as HTMLButtonElement).style.paddingLeft = "30px";
        (el.shadowRoot.children[0].shadowRoot.children[0].shadowRoot.children[0] as HTMLButtonElement).style.paddingRight = "30px";
    }
}

export default function Header() {
    const account = useAppKitAccount();

    useEffect(() => {
        if (typeof window == 'undefined') return;
        let el = globalThis.document.getElementById("reown-button");
        if (!el) return;
        updateBtnStyle(el);
    }, [account])

    return <div className="flex justify-between items-center py-4" >
        <Logo />
        <DAPP_WALLET_PROVIDER_CONTEXT.Consumer>
            {() => <>
                {/* Ghnd3GHjbsZ....f3D */}
                <appkit-button id="reown-button" />
            </>}
        </DAPP_WALLET_PROVIDER_CONTEXT.Consumer>
    </div>
}