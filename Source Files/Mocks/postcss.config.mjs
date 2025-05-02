import path from "path";
//import scss from "postcss-scss";

export default {
  syntax: "postcss-scss",
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
