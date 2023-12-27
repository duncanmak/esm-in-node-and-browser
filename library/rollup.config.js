import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import pkg from './package.json'  with { type: "json" };

export default [
	{
		input: 'dist/index.js',
		output: [
			{ file: pkg.module, format: 'es' }
		],
        plugins:[
            resolve(),
            terser()
        ]
	}
];