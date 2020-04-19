module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-use-before-define": "off",
    "quotes": ["error", "double"]
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true }
        ]
      },
      env: {
        jest: true
      }
    }
  ]
};
