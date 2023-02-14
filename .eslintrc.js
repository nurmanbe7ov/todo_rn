module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "jest", "jest-formatting"],
  parserOptions: {
    project: ["./tsconfig.json"], // Specify it only for TypeScript files
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      typescript: true
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  env: {
    "react-native/react-native": true
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "no-console": ["error", { allow: ["warn", "error", "info"] }],
        "no-dupe-class-members": "off",
        "no-extra-parens": "off",
        "no-invalid-this": "off",
        "no-unused-expressions": "off",
        "no-useless-constructor": "off",
        "no-return-await": "off",
        "no-unused-vars": "off",
        "no-void": ["error", { allowAsStatement: true }],
        "keyword-spacing": "off",
        quotes: [1, "double"],
        "comma-dangle": [1, "never"],
        quotes: "off",
        semi: "off",
        camelcase: "off",
        indent: "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-readonly": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/switch-exhaustiveness-check": ["error"],
        "@typescript-eslint/no-misused-promises": ["off"],
        "@typescript-eslint/prefer-literal-enum-member": ["error"],
        "@typescript-eslint/prefer-enum-initializers": ["error"],
        "@typescript-eslint/prefer-includes": ["error"],
        "@typescript-eslint/prefer-for-of": ["error"],
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/no-dynamic-delete": ["error"],
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "@typescript-eslint/no-throw-literal": ["error"],
        "@typescript-eslint/no-invalid-void-type": [
          "error",
          { allowInGenericTypeArguments: true }
        ],
        "@typescript-eslint/promise-function-async": ["error"],
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/return-await": ["error", "always"],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
        "@typescript-eslint/no-invalid-this": ["error"],
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter"
          }
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: "method", format: ["camelCase"] },
          { selector: "typeLike", format: ["PascalCase"] },
          { selector: "enumMember", format: ["UPPER_CASE"] },
          { selector: "function", format: ["camelCase", "PascalCase"] },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow"
          }
        ],
        "object-curly-spacing": [
          "error",
          "always",
          {
            arraysInObjects: true,
            objectsInObjects: true
          }
        ],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": [
          "error",
          {
            before: false,
            after: true
          }
        ],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "none",
              requireLast: false
            },
            singleline: {
              delimiter: "semi",
              requireLast: false
            }
          }
        ],
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          { blankLine: "never", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "block", next: "*" },
          { blankLine: "always", prev: "export", next: "export" },
          { blankLine: "never", prev: "import", next: "import" },
          { blankLine: "always", prev: "import", next: "block-like" },
          { blankLine: "always", prev: "function", next: "*" },
          { blankLine: "always", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "block-like", next: "*" },
          { blankLine: "always", prev: "if", next: "*" },
          { blankLine: "always", prev: ["type", "interface"], next: "*" },
          { blankLine: "always", prev: "block-like", next: "export" },
          { blankLine: "always", prev: "multiline-block-like", next: "export" },
          {
            blankLine: "always",
            prev: "multiline-block-like",
            next: "multiline-block-like"
          }
        ],
        "space-before-blocks": ["error", "always"],
        "react/jsx-props-no-spreading": "error",
        "react/jsx-closing-bracket-location": ["warn"],
        "react/prefer-stateless-function": ["error"],
        "react/destructuring-assignment": ["error", "always"],
        "react/hook-use-state": ["error"],
        "react/no-array-index-key": ["error"],
        "react/no-this-in-sfc": ["error"],
        "react/jsx-closing-tag-location": ["error"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-curly-spacing": [
          "error",
          {
            when: "never",
            children: true,
            spacing: { objectLiterals: "never" }
          }
        ],
        "react/jsx-fragments": ["error"],
        "import/no-unresolved": ["error", { ignore: ["\\.svg$"] }],
        "import/no-default-export": ["error"],
        "jest/consistent-test-it": ["error", { fn: "it" }],
        "jest/no-duplicate-hooks": ["error"],
        "jest/no-test-return-statement": ["error"],
        "jest/prefer-expect-resolves": ["error"]
      }
    }
  ]
}
