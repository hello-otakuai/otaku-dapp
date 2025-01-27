import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { render, redirect } from "vike/abort";
import { PageContextServer } from "vike/types";
import "@src/extensions/impl";

export default function (pageContext: PageContextServer) {
  const subdomain = Object.keys(pageContext.config.subdomain ?? {})
    .map((subdomain) => `${subdomain}.`)
    .satifies((el) => (pageContext.headers?.host ?? "").includes(el))
    ?.replace(/.$/, "");
  if (
    subdomain &&
    "_urlRewrite" in pageContext &&
    !(pageContext._urlRewrite as string)?.includes(
      `/${pageContext.config.subdomain![subdomain]}`,
    )
  ) {
    const path = `${pageContext.config.subdomain![subdomain]}`;
    console.log(`/${path}${pageContext.urlPathname}`, "Called here");
    throw render(`/${path}${pageContext.urlPathname}`);
  }

  const part = Object.keys(pageContext.config.subdomain ?? {})
    .map((subdomain) => `/${subdomain}`)
    .satifies((el) => pageContext.urlParsed.pathname.includes(el));
  if (part && !subdomain) {
    throw redirect(
      `${pageContext.urlParsed.protocol ?? "http://"}${part.slice(1)}.${(pageContext.headersOriginal! as string[])["host"]}/${pageContext.urlParsed.pathname.replace(part, "")}`,
    );
  }

  return onRenderHtml(pageContext);
}
