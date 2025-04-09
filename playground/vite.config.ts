import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
	plugins: [vue(), react()],
	server: {
		open: true,
		fs: {
			strict: true, // 确保文件系统访问正确
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				vue: resolve(__dirname, "src/vue/index.html"),
				react: resolve(__dirname, "src/react/index.html"),
			},
		},
	},
	resolve: {
		alias: {
			avatar: resolve(__dirname, "../src"),
			vue: "vue/dist/vue.esm-bundler.js", // 关键配置
		},
	},
});
