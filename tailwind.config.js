/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{ts,tsx}",
		"mdx-components.tsx",
	],
	theme: {
		extend: {
			animation: {
				"fade-in": "fade-in 0.4s ease",
				"top-in": "top-in 0.4s ease",
				"fade-out": "fade-out 0.4s ease",
				"top-out": "top-out 0.4s ease",
			},

			keyframes: {
				"fade-in": {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				"top-in": {
					"0%": { opacity: 0, transform: "translate(0, -20px)" },
					"100%": { opacity: 1 },
				},
				"fade-out": {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				"top-out": {
					"0%": { opacity: 1 },
					"100%": { opacity: 0, transform: "translate(0, -20px)" },
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *")
		},
	],
}
