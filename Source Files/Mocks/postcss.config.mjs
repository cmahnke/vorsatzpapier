import path from "path";
import { NodePackageImporter } from "sass";

export default {
  syntax: "postcss-scss",
  use: [
    [
      "sass",
      {
        pkgImporter: new NodePackageImporter()
      }
    ]
  ],
  plugins: {
    "postcss-url": {
      url: "inline",
      maxSize: 10,
      fallback: "copy",
      basePath: path.resolve("src/assets/scss"),
      assetsPath: path.resolve("src/assets/images")
    }
  }
};
