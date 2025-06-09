import path from "path";
import url from "postcss-url";
import { NodePackageImporter } from 'sass';
//import scss from "postcss-scss";

export default {
  syntax: "postcss-scss",
  use: [
    [
      'sass',
      {
        pkgImporter: new NodePackageImporter(),
      },
    ],
  ],
  plugins: {
    "postcss-url": {
      url: "inline",
      maxSize: 10,
      fallback: "copy",
      basePath: path.resolve("patterns/assets/scss"),
      assetsPath: path.resolve("patterns/assets/images")
    }
  }
};
