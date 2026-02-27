import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "remote_app",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button",
          "./Header": "./src/components/Header",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: Number(env.VITE_REMOTE_PORT || 3001),
      strictPort: true,
      cors: true,
    },
  };
});
