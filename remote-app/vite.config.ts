import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    plugins: [
      react(),
      federation({
        name: "remote_app",
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
          shared_app: env.VITE_SHARED_APP_URL,
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
