import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  // Add your framework/language configs here (e.g., typescript-eslint, react, next)
  eslintPluginPrettierRecommended,
];
