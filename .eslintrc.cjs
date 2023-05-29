module.exports = {
  plugins: [`simple-import-sort`, `@tanstack/query`],
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:prettier/recommended`,
    `plugin:cypress/recommended`,
    `plugin:@tanstack/eslint-plugin-query/recommended`,
  ],
  rules: {
    'prettier/prettier': [`error`, {}, { usePrettierrc: true }],
    'quotes': [`error`, `backtick`],
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': `off`,
    'jsx-a11y/anchor-is-valid': [
      `error`,
      {
        components: [`Link`],
        specialLink: [`hrefLeft`, `hrefRight`],
        aspects: [`invalidHref`, `preferButton`],
      },
    ],
    'jsx-a11y/label-has-associated-control': [`off`],
    'simple-import-sort/exports': `error`,
    'simple-import-sort/imports': `error`,
  },
}
