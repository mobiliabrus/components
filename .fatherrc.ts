import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    output: {
      path: 'dist',
      filename: 'components.umd.min.js',
    },
    externals: {
      antd: 'antd',
    },
  },
});
