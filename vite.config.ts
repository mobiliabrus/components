import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'components',
      formats: ['umd'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue', 'antd'],
      output: {
        globals: {
          antd: 'antd',
          vue: 'Vue',
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
