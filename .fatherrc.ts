import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    output: {
      path: 'dist',
      filename: 'components.js',
    },
    externals: {
      antd: 'antd',
    },
  },
});
