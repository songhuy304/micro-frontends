import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "shared_app",
        filename: "remoteEntry.js",
        exposes: {
          "./components": "./src/components/index.ts",
          "./utils": "./src/utils/index.ts",
        },
        shared: ["react", "react-dom", "antd"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: Number(env.VITE_SHARED_PORT || 3009),
      strictPort: true,
      cors: true,
    },
  };
});
