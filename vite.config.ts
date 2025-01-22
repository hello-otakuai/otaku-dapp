import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [vike({}), react({}), telefunc()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./assets", import.meta.url),
        ),
      },
      {
        find: "@src",
        replacement: fileURLToPath(
          new URL("./src", import.meta.url),
        ),
      },
    ],
  },
});
