import Logo from "@src/components/Logo";

export default function Header() {
    return (
        <div className="p-4 sticky top-0 flex justify-between max-w-screen-xl mx-auto">
            <Logo />
            <div>
                <a
                    href="/app"
                    className="px-8 py-2 rounded-3xl bg-secondary hover:bg-zinc-700 transition-all duration-300 text-zinc-200"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
