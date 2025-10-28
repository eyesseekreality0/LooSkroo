import tsStripProcessor from "./lib/eslint/ts-strip-processor.mjs"

const sharedGlobals = {
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  console: "readonly",
  JSX: "readonly",
  process: "readonly",
  module: "readonly",
  require: "readonly",
}

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/dist/**",
      "**/public/**",
      "**/*.css",
      "**/*.scss",
      "**/*.json",
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "ts-strip": tsStripProcessor,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: sharedGlobals,
    },
    rules: {
      eqeqeq: ["error", "smart"],
      "no-trailing-spaces": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-undef": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      semi: ["error", "never"],
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": ["error", { before: true, after: true }],
    },
  },
  {
    files: ["**/*.ts"],
    processor: "ts-strip/ts",
  },
  {
    files: ["**/*.tsx"],
    processor: "ts-strip/tsx",
  },
]
