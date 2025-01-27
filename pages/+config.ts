import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

export default {
  title: "Otaku Journal",
  description: "Track your crypto journey",
  extends: vikeReact,
  meta: {
    subdomain: {
      env: {
        server: true,
        client: true,
      },
    },
    credentials: {
      env: {
        server: true,
        client: true,
      },
    },
  },
} satisfies Config;
