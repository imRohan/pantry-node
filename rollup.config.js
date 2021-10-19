import eslint from '@rollup/plugin-eslint'

export default {
  input: 'src/pantry.js',
  output: {
    name: 'Pantry',
    file: 'dist/pantry.js',
    format: 'umd',
  },
  plugins: [
    eslint({
      fix: true,
      throwOnError: true,
    }),
  ],
}
