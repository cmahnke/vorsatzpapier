import path from "path";

export default {
  syntax: "postcss-scss",
  plugins: {
    "postcss-import": {},
    "postcss-url": {
      url: "inline",
      maxSize: 10,
      fallback: "copy",
      basePath: path.resolve("patterns/assets/scss"),
      assetsPath: path.resolve("patterns/assets/images")
    },
    "postcss-reporter": {}
  }
};
