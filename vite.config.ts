import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2020'
		}
	},
	build: {
		target: 'es2020'
	},
	plugins: [vue()]
})
