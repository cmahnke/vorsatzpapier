import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import path from "path";
import copy from "rollup-plugin-copy";

// External configs
import typescriptOptions from "./tsconfig.json" with { type: "json" };
import packageJson from "./package.json" with { type: "json" };

const artifactName = packageJson.name;
const artifactversion = packageJson.version;

const scssConfig = {
  api: "modern-compiler",
  sourceMapEmbed: true,
  fileName: `${artifactName}.css`
};

const config = [
  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: `build/dist/${artifactName}-${artifactversion}.d.ts`,
        format: "es"
      }
    ],
    plugins: [scss({ output: false, ...scssConfig }), dts()]
  },
  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: `build/dist/${artifactName}-${artifactversion}.js`,
        format: "es",
        sourcemap: true,
        assetFileNames: "[name][extname]"
      }
    ],
    external: ["openseadragon", "openseadragon-fabric", "fabric", "@allmaps/iiif-parser", "i18next", "i18next-browser-languagedetector"],
    plugins: [
      //scss(scssConfig),
      postcss({
        extract: `${artifactName}-${artifactversion}.css`,
        sourceMap: true,
        plugins: [
          url({
            url: "inline",
            maxSize: 10,
            fallback: "copy",
            basePath: path.resolve("patterns/assets/scss"),
            assetsPath: path.resolve("patterns/assets/images")
          })
        ]
      }),
      alias({
        entries: [
          {
            find: "@",
            replacement: path.resolve("patterns/assets")
          }
        ]
      }),
      commonjs(),
      typescript(typescriptOptions),
      nodeResolve(),
      json()
    ]
  },

  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: `build/${artifactName}-${artifactversion}-complete.iife.min.js`,
        format: "iife",
        name: "PatternGenerator",
        sourcemap: true,
        assetFileNames: "[name][extname]"
      },
      {
        file: `build/${artifactName}-${artifactversion}-complete.es.min.js`,
        format: "es",
        sourcemap: true
      }
    ],
    plugins: [
      //scss(scssConfig),
      postcss({
        extract: `${artifactName}-${artifactversion}.css`,
        sourceMap: true,
        plugins: [
          url({
            url: "inline",
            maxSize: 10,
            fallback: "copy",
            basePath: path.resolve("patterns/assets/scss"),
            assetsPath: path.resolve("patterns/assets/images")
          })
        ]
      }),
      alias({
        entries: [
          {
            find: "@",
            replacement: "patterns/assets"
          }
        ]
      }),
      commonjs(),
      copy({
        targets: [
          {
            src: "patterns/index.html",
            dest: "build",
            transform: (contents, filename) =>
              contents
                .toString()
                .replace("./assets/ts/main.ts", `${artifactName}-${artifactversion}-complete.es.min.js`)
                .replace("</title>", `</title><link rel="stylesheet" crossorigin href="${artifactName}-${artifactversion}.css.css">`)
          }
        ]
      }),
      typescript({ ...typescriptOptions, sourceMap: false, inlineSources: false }),
      nodeResolve(),
      json(),
      terser()
    ]
  }
];

export default config;
