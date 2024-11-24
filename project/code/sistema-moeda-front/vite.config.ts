// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc', // Redireciona para styled-components
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'chunk-OH3LFVO2',
      'chunk-ABLGNYSL'
    ]
  }
});