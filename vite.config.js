import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        login: "./login.html",
        signup: "./sign_up.html",
        dashboard: "./dashboard/dashboard.html",
      },
    },
  },
});
