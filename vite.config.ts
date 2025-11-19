import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro as nitroV3PLugin } from "nitro/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig(() => {
    return {
        plugins: [
            tanstackStart(),
            // nitroV2Plugin(), // v2
            nitroV3PLugin(), // v3
            react(),
        ],
        server: { port: 3000, open: true, host: true },
    };
});
