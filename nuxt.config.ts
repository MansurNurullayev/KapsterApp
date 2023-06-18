// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  modules: ["@pinia/nuxt"],

  devtools: { enabled: true },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
