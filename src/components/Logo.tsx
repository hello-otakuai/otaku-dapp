import logoUrl from "@assets/logo.png";
import faviconUrl from "@assets/favicon.svg";

export default function Logo() {
    return <>
        <img src={logoUrl} alt="logo" className="hidden md:block scale-90" />
        <img src={faviconUrl} alt="logo" className="md:hidden size-8"/>
    </>
}