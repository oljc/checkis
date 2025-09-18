import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2020',
      bundle: false,
      dts: {
        distPath: './dist/types',
      },
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
      source: {
        entry: {
          index: ['./src/**', '!src/**/*.test.ts'],
        },
        exclude: ['**/*.test.ts'],
      },
    },
    {
      format: 'cjs',
      syntax: 'es2020',
      bundle: false,
      dts: false,
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
      source: {
        entry: {
          index: ['./src/**', '!src/**/*.test.ts'],
        },
        exclude: ['**/*.test.ts'],
      },
    },
    {
      format: 'umd',
      syntax: 'es2020',
      bundle: true,
      umdName: 'Checkis',
      output: {
        filename: {
          js: 'checkis.js',
        },
      },
    },
    {
      format: 'umd',
      syntax: 'es2020',
      bundle: true,
      umdName: 'Checkis',
      output: {
        minify: true,
        filename: {
          js: 'checkis.min.js',
        },
      },
    },
  ],
  source: {
    tsconfigPath: './tsconfig.build.json',
  },
});
