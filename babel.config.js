module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" } // or LTS version
      }
    ],
    [
      "@babel/preset-typescript",
      {
        allowDeclareFields: true
      }
    ]
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@utils": "./src/utils",
          "@models": "./src/models"
        }
      }
    ],
    "@babel/plugin-transform-modules-commonjs"
  ],
  ignore: ["node_modules", "**/*.spec.ts", "**/*.test.ts"]
};
