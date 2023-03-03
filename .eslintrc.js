module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard-with-typescript', 'eslint:recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/explicit-function-return-type': 'off'
    }
}
