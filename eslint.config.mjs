import next from "eslint-config-next"

export default [
  {
    ignores: ["node_modules", ".next", "out", "public", "dist"],
  },
  ...next,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]
