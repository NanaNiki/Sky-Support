import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { config } from 'dotenv'

export default defineConfig(({ mode }) => {
  const envConfig = config({ path: `.env.${mode}` }).parsed

  return {
    plugins: [vue()],
    define: {
      'process.env': JSON.stringify(envConfig),
    },
  }
})