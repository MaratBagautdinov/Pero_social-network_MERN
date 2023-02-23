import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve('src') },
			{ find: '$', replacement: path.resolve('public') }
			]
	},
	build: {
		rollupOptions: {
			input: {
				main: path.resolve('index.html'),
				error: path.resolve('404.html')
			}
		}
	},
	plugins: [react()]
})
