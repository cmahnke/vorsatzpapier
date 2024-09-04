import { resolve, join } from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { viteSingleFile } from "vite-plugin-singlefile";
import stylelint from "vite-plugin-stylelint";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import {DynamicPublicDirectory} from "vite-multiple-assets";
import { checker } from "vite-plugin-checker";
//import topLevelAwait from "vite-plugin-top-level-await";

const mimeTypes = { ".glb": "model/gltf-binary" };

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    nodePolyfills(),
    {
      apply: "build",
    },
    stylelint({ build: true, dev: false, lintOnStart: true }),
    DynamicPublicDirectory(["patterns/public"], {
      ssr: false,
      mimeTypes,
    }),
    checker({ typescript: false }),
    /*
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
    */
  ],
  build: {
    //target: 'esnext',
    target: "es2020",
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "patterns/index.html"),
      },
      output: {
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1"),
      },
    ],
  },
  optimizeDeps: {
    exclude: ["@monogrid/gainmap-js/libultrahdr", "three"],
  },
});
