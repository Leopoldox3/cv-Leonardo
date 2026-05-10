
/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Roboto Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};

export default config;
