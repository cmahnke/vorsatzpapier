import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import path from "path";
import fs from "fs";
import copy from "rollup-plugin-copy";
import { NodePackageImporter } from "sass";

// External configs
import typescriptOptions from "./tsconfig.json" with { type: "json" };
import packageJson from "./package.json" with { type: "json" };

const artifactName = packageJson.name;
const artifactversion = packageJson.version;

const fontPath = "patterns/assets/fonts";

const postcssConfig = {
  sourceMap: false,
  use: [
    [
      "sass",
      {
        pkgImporter: new NodePackageImporter()
      }
    ]
  ],
  plugins: [
    url([
      {
        url: "inline",
        maxSize: 10,
        fallback: "copy",
        basePath: path.resolve("patterns/assets/scss"),
        assetsPath: path.resolve("patterns/assets/images")
      },
      {
        filter: "@fontsource-*/**/*.*",
        basePath: path.resolve("node_module"),
        assetsPath: path.resolve("patterns/assets/fonts")
      },
      {
        filter: "@**/**/*.woff2",
        url: "rebase"
      }
    ])
  ]
};

const aliasConfig = {
  entries: [
    {
      find: "@",
      replacement: path.resolve("patterns/assets")
    }
  ]
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
    plugins: [
      postcss({
        extract: false,
        ...postcssConfig
      }),
      dts()
    ]
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
      alias(aliasConfig),
      postcss({
        extract: `${artifactName}-${artifactversion}.css`,

        sourceMap: true,
        use: [
          [
            "sass",
            {
              pkgImporter: new NodePackageImporter()
            }
          ]
        ],
        plugins: [
          url([
            {
              //filter: "@fontsource*/**/*.woff2",
              filter: "@fontsource**",
              url: (asset) => {
                
                if (asset.pathname.startsWith("@fontsource")) {
                  const src = path.resolve(path.join("node_modules", asset.pathname))
                  const dest = path.join(fontPath, path.basename(asset.pathname))
                  /*
                  if (!fs.pathExistsSync(dest)) {
                     fs.copySync(src, dest)
                  }
                  */
                  console.log("=>", asset, src)
                  return src
                }
              },
              multi: true
            },
            {
              url: "inline",
              maxSize: 10,
              fallback: "copy",
              basePath: path.resolve("patterns/assets/scss"),
              assetsPath: path.resolve("patterns/assets/images")
            },

          ])
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
      alias(aliasConfig),
      postcss({
        extract: `${artifactName}-${artifactversion}.css`,
        sourceMap: true,
        use: [
          [
            "sass",
            {
              pkgImporter: new NodePackageImporter()
            }
          ]
        ],
        plugins: [
          url([
            {
              url: "inline",
              maxSize: 10,
              fallback: "copy",
              basePath: path.resolve("patterns/assets/scss"),
              assetsPath: path.resolve("patterns/assets/images")
            },
            {
              filter: "@fontsource-*/**/*.*",
              basePath: path.resolve("node_module"),
              assetsPath: path.resolve("patterns/assets/fonts")
            },
            {
              filter: "@**/**/*.woff2",
              url: "rebase"
            }
          ])
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
