import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { render } from "vike/abort";
import { PageContextServer } from "vike/types";
import "@src/extensions/impl";

export default function (pageContext: PageContextServer) {
    const subdomain = Object.keys(pageContext.config.subdomain ?? {}).map((
        subdomain,
    ) => `${subdomain}.`).satifies((el) =>
        (pageContext.headers?.host ?? "").includes(el)
    )?.replace(/.$/, "");
    if (
        subdomain &&
        "_urlRewrite" in pageContext &&
        !(pageContext._urlRewrite as string)?.includes(
            `/${pageContext.config.subdomain![subdomain]}`,
        )
    ) {
        const path = `${pageContext.config.subdomain![subdomain]}`;
        throw render(
            `/${path}${pageContext.urlPathname}`,
        );
    }

    return onRenderHtml(pageContext);
}
