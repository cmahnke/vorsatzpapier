import { resolve, join } from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { viteSingleFile } from "vite-plugin-singlefile";
import stylelint from "vite-plugin-stylelint";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { DynamicPublicDirectory } from "vite-multiple-assets";
import { checker } from "vite-plugin-checker";
import { viteStaticCopy } from "vite-plugin-static-copy";
import svg from "vite-plugin-svgo";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { NodePackageImporter } from 'sass';

// External configs
import svgoConfig from "./svgo.config.mjs";
import packageJson from "./package.json";

const artifactName = packageJson.name;
const artifactversion = packageJson.version;

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  /*assetsInclude: ['assets/images/*.svg'],*/
  plugins: [
    nodePolyfills(),
    {
      apply: "build"
    },
    DynamicPublicDirectory(["patterns/public"], {
      ssr: false
    }),
    checker({ typescript: false }),
    svg(svgoConfig),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/openseadragon/build/openseadragon/images/*",
          dest: "images/"
        }
      ]
    }),
    stylelint({ build: true, dev: false, lintOnStart: true })
  ],
  build: {
    target: browserslistToEsbuild(),
    commonjsOptions: { transformMixedEsModules: true },
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "patterns/index.html")
      },
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
    }
    /*
    lib: {
      entry: ['patterns/assets/ts/CuttingTable.ts'],
      formats: ['es', 'umd', 'iife'],
      name: "PatternGenerator",
      fileName: (format, entryName) => `${artifactName}-${artifactversion}.${format}.js`,
      cssFileName: artifactName
    }*/
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1")
      },
      {
        find: /@\/(.+)/,
        replacement: join(process.cwd(), "patterns", "assets", "$1")
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [new NodePackageImporter()],
      },
    },
  },
  server: {
    cors: true
  }
});
