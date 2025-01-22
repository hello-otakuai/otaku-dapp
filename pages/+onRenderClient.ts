import { onRenderClient } from "vike-react/__internal/integration/onRenderClient";
import { PageContextClient } from "vike/types";
import "@assets/css/style.css";
import "@assets/css/tailwind.css";

import "@src/extensions/impl";

export default function (pageContext: PageContextClient) {
    onRenderClient(pageContext);
}
