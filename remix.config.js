// import { sassPlugin } from "esbuild-sass-plugin";
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  module: "esnext",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.scss", "**/*.css.map"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  // plugins: [
  //   // Use the sassPlugin to handle Sass files
  //   sassPlugin({
  //     filter: /\.scss$/,
  //     loadPaths : ["app/styles"], // Add the directory where your Sass files are located
  //   }),
  // ],
};
