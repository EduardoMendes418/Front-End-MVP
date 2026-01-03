/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f5f3ff",
					100: "#ede9fe",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					900: "#4c1d95",
				},
				secondary: {
					50: "#eef2ff",
					100: "#e0e7ff",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					900: "#312e81",
				},
				dark: {
					100: "#1f2937",
					200: "#111827",
					300: "#0f172a",
				},
			},
			animation: {
				"pulse-slow": "pulse 3s linear infinite",
				"bounce-slow": "bounce 2s infinite",
				float: "float 3s ease-in-out infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
		},
	},
	plugins: [],
};
