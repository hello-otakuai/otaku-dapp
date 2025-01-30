import driftLogo from "@assets/images/apps/drift_protocol.svg";
import { createContext, ReactNode, useState } from "react";

export const INSTALLED_APPS_CONTEXT = createContext<AppInfo[]>([]);

export const AVAILABLE_APP_LIST = [
    {
        title: "Drift",
        logoUrl: driftLogo,
        mint: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
    },
];

export const RECOMMENDED = [0];

export default function InstalledAppsProvider(
    { children }: { children: ReactNode },
) {
    const [registered, setRegisterd] = useState<AppInfo[]>([]);

    return (
        <INSTALLED_APPS_CONTEXT.Provider value={registered}>
            {children}
        </INSTALLED_APPS_CONTEXT.Provider>
    );
}
