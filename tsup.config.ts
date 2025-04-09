import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/react/index.ts", "src/vue/index.ts"],
	outDir: "dist",
	format: ["esm", "cjs"],
	dts: true,
	clean: true,
	splitting: false,
	sourcemap: true,
	skipNodeModulesBundle: true,
	target: "esnext",
});
