import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {

    external: ["vue"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({

    plugins: [
        vue(),
        Unocss(),
        vueJsx({})
    ],
    build: {
        rollupOptions,
        minify: 'terser',
        sourcemap: true,
        brotliSize: true, // 生成压缩大小报告
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "ZeroUI",
            fileName: "zero-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
});