import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
      plugins: [react()],
      server: {
            host: true, // Expose to network; allows access from mobile
            port: 5173, // Optional: Change the port
      },
});
