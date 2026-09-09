import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { spawn } from 'child_process';
import path from 'path';

function autoStartChatbotBackend() {
  let backendStarted = false;
  return {
    name: 'auto-start-chatbot-backend',
    configureServer() {
      if (backendStarted) return;
      backendStarted = true;

      console.log('\n🤖 [Vite Dev Server] 챗봇 백엔드 서버(FastAPI: 8000포트) 자동 실행 시작...');
      const backendDir = path.resolve(__dirname, 'chatbot/backend');
      const pyProcess = spawn('python', ['-m', 'uvicorn', 'main:app', '--port', '8000'], {
        cwd: backendDir,
        shell: true,
        stdio: 'ignore',
      });

      pyProcess.on('error', (err) => {
        console.error('❌ [Chatbot Backend Auto-Start Error]:', err.message);
      });

      const cleanup = () => {
        if (pyProcess && !pyProcess.killed) {
          try {
            pyProcess.kill();
          } catch (e) {
            // ignore
          }
        }
      };

      process.on('exit', cleanup);
      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), autoStartChatbotBackend()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lottie: ['lottie-web'],
        },
      },
    },
  },
});
