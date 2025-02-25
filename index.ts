import { serve } from "bun";

serve({
  port: 4000,
  fetch(req) {
    return new Response(
      JSON.stringify({ message: "Hello from Bun.js Backend!" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:1420", // ✅ Allow Tauri origin
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  },
});
