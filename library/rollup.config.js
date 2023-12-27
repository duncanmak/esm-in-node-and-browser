import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts'
import pkg from './package.json'  with { type: "json" };

export default [
	{
		input: './build/index.js',
		output: [
			{ file: pkg.module, format: 'es' }
		],
        plugins:[
            resolve(),
            terser()
        ]
	},
	{
		input: './build/index.d.ts',
		output: [{ file: 'dist/module.d.ts', format: 'es' }],
		plugins: [dts()],
	  },
];