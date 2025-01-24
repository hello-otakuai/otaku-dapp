import { onRenderClient } from "vike-react/__internal/integration/onRenderClient";
import { PageContextClient } from "vike/types";
import { render } from "vike/abort";
import "@assets/css/style.css";
import "@assets/css/tailwind.css";
import "@assets/css/color.css";

import "@src/extensions/impl";

export default function (pageContext: PageContextClient) {
    onRenderClient(pageContext);
}
