import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

// External configs
import typescriptOptions from "./tsconfig.json" with { type: "json" };

const config = [
  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: "build/pattern-generator.js",
        format: "es",
        sourcemap: true
      }
    ],
    external: ["openseadragon", "openseadragon-fabric", "fabric", "@allmaps/iiif-parser"],
    plugins: [
      commonjs(),
      typescript(typescriptOptions),
      nodeResolve(),
      json(),
      alias({
        entries: [
          {
            find: "@",
            replacement: "patterns/assets"
          }
        ]
      })
    ]
  },
  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: "build/pattern-generator-complete.iife.min.js",
        format: "iife",
        name: "PatternGenerator",
        sourcemap: true
      },
      {
        file: "build/pattern-generator-complete.es.min.js",
        format: "es",
        sourcemap: true
      }
    ],
    plugins: [
      commonjs(),
      typescript(typescriptOptions),
      nodeResolve(),
      json(),
      terser(),
      alias({
        entries: [
          {
            find: "@",
            replacement: "patterns/assets"
          }
        ]
      })
    ]
  },
  {
    input: "patterns/assets/ts/CuttingTable.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es"
      }
    ],
    plugins: [dts()]
  }
];

export default config;
