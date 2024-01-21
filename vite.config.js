import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/products': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false
			},
			'/uploads/': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false
			}

		}
	}
});
