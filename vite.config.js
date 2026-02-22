import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        edit: resolve(__dirname, 'pages/edit_request.html'),
        config: resolve(__dirname, 'pages/setups_config.html'),
        food: resolve(__dirname, 'pages/setups/food_beverage.html'),
        enterprise: resolve(__dirname, 'pages/setups/local_enterprise.html'),
        person: resolve(__dirname, 'pages/setups/person_services.html'),
      },
    },
  },
})