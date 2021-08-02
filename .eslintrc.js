module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
      "prettier" // prettierのextendsは他のextendsより後に記述する
      //2021/02/21より.eslintrc.jsのextendsの記載方法が変わり "prettier/@typescript-eslint"不要
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "sourceType": "module",
      "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
    },
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    rules: {}
  }