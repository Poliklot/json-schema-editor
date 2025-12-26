import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'node:path';

const umdName = process.env.UMD_GLOBAL ?? 'JsonSchemaEditor';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: umdName,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.mjs';
        if (format === 'cjs') return 'index.cjs';
        return 'index.umd.js';
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
});
