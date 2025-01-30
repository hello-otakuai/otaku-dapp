import otakuLogoUrl from "@assets/favicon.svg";
import { showDialog } from "@src/components/Dialog";
import {
    AVAILABLE_APP_LIST,
    INSTALLED_APPS_CONTEXT,
    RECOMMENDED,
} from "../../providers/InstalledAppsProvider";
import { LinkIcon } from "@heroicons/react/24/outline";

const InstallAppModal = ({ id }: { id: number }) => {
    const app = AVAILABLE_APP_LIST[id];

    return (
        <div className="py-12 flex flex-col items-center gap-8 rounded-3xl bg-secondary">
            <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <img src={otakuLogoUrl} className="size-8" />
                    <div>{"Otaku"}</div>
                </div>
                <LinkIcon className="size-4" />
                <div className="flex gap-2 items-center">
                    <img src={app.logoUrl} />
                    <div>{app.title}</div>
                </div>
            </div>
            <div className="text-[#ADADAD] text-center px-12 text-sm space-x-1">
                <span>
                    Allow Otaku to read your trading information on
                </span>
                <span className="font-bold text-white">
                    {app.title}
                </span>
                <span>
                    and log your Spot and Perp / Futures trade automatically
                </span>
            </div>
            <div className="space-y-1">
                <button
                    className="bg-[#FFFAF2] rounded-3xl px-8 py-2 flex gap-4 items-center text-[#1E1E1E]"
                    disabled
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.09961 26.8001C6.79136 26.0253 10.0312 22.4601 10.9806 22.4601H21.0192C22.395 22.4601 25.2036 25.4154 25.8996 26.4572M30.3996 16.0001C30.3996 23.953 23.9525 30.4001 15.9996 30.4001C8.04671 30.4001 1.59961 23.953 1.59961 16.0001C1.59961 8.0472 8.04671 1.6001 15.9996 1.6001C23.9525 1.6001 30.3996 8.0472 30.3996 16.0001ZM21.1579 11.092C21.1579 8.34477 18.8387 6.1001 16 6.1001C13.1615 6.1001 10.8422 8.34477 10.8422 11.092C10.8422 13.8393 13.1615 16.084 16 16.084C18.8386 16.084 21.1579 13.8393 21.1579 11.092Z"
                            stroke="#1E1E1E"
                            strokeWidth="2.5"
                        />
                    </svg>
                    <p>
                        Connect to {app.title}
                    </p>
                </button>
                <div className="text-center text-xs">
                    Coming soon
                </div>
            </div>
        </div>
    );
};

const AppButton = (
    { id, title, logoUrl, installed = false }: {
        id: number;
        title: string;
        logoUrl: string;
        installed?: boolean;
    },
) => {
    const installApp = () => {
        showDialog(() => <InstallAppModal id={id} />, {});
    };

    return (
        <div className="w-full py-4 px-6 flex justify-between gap-4 items-center bg-secondary rounded-3xl">
            <div className="flex gap-4 items-center">
                <img src={logoUrl} className="size-12" />
                <div>
                    {title}
                </div>
            </div>
            <div>
                {installed && (
                    <button>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9.26471H30M13.5 4.5H22.5M15 25.1471V15.6176M21 25.1471V15.6176M23.25 31.5H12.75C11.0931 31.5 9.75 30.0778 9.75 28.3235L9.0651 10.9191C9.02959 10.0167 9.71087 9.26471 10.5638 9.26471H25.4362C26.2891 9.26471 26.9704 10.0167 26.9349 10.9191L26.25 28.3235C26.25 30.0778 24.9069 31.5 23.25 31.5Z"
                                stroke="#ADADAD"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}
                {!installed && (
                    <button onClick={installApp}>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.9">
                                <path
                                    d="M23.0625 17.9992H18M18 17.9992H12.9375M18 17.9992V23.0617M18 17.9992L18 12.9367M31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5C25.4558 4.5 31.5 10.5442 31.5 18Z"
                                    stroke="#ADADAD"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default function AppList() {
    return (
        <INSTALLED_APPS_CONTEXT.Consumer>
            {(registered) => (
                <>
                    <div className="py-4 grid lg:grid-cols-2 gap-4 lg:gap-8">
                        {registered.map((app, id) => (
                            <AppButton {...app} id={id} />
                        ))}
                    </div>
                    <div
                        className="h-1 bg-zinc-500"
                        hidden={registered.length == 0}
                    />
                    <div className="space-y-3">
                        <p className="text-sm text-zinc-300">
                            Recommended
                        </p>
                        {RECOMMENDED.filter((id) =>
                            !registered.map((v) => v.mint).includes(
                                AVAILABLE_APP_LIST[id].mint,
                            )
                        ).map((id) => (
                            <AppButton
                                {...AVAILABLE_APP_LIST[id]}
                                id={id}
                            />
                        ))}
                    </div>
                </>
            )}
        </INSTALLED_APPS_CONTEXT.Consumer>
    );
}
