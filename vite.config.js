import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        login: "./login.html",
        signup: "./sign_up.html",
        "dashboard home": "./dashboard/home.html",
        "dashboard links": "./dashboard/links.html",
        "dashboard analytics": "./dashboard/analytics.html",
        "dashboard settings": "./dashboard/setting.html",
        "dashboard help center": "./dashboard/help-center.html",
      },
    },
  },
});
