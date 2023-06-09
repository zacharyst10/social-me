/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'custom-orange': '#F78100',
				'custom-blue': '#0EC7E0',
				'hover-blue': '#0097B9',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')	],
}
