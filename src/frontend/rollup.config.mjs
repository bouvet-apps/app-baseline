// rollup.config.mjs

import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'


export default {
	input: 'main.js',
    external: ['baseline'],
	output: [
    {
        file: '../main/resources/assets/baseline.min.js',
        format: 'iife',
        name: 'version',
        plugins: [terser()]
    }
],
    plugins: [json(), nodeResolve()]
};