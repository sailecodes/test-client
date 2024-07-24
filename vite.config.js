import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // NOTE: Only needed for REST via Axios
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5200/api",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
