import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "host_app",
        remotes: {
          remote_app: env.VITE_REMOTE_APP_URL,
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
      port: Number(env.VITE_HOST_PORT || 3000),
      strictPort: true,
      cors: true,
    },
    server: {
      port: Number(env.VITE_HOST_PORT || 3000),
      strictPort: true,
      cors: true,
    },
  };
});
