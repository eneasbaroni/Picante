import { color } from "framer-motion"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        notebook: {max: '1280px'},
        tablet: {max: '1024px'},
        mobile: {max: '768px'},
      },
      fontFamily: {
        anton: ["var(--font-anton)"],
        titilium: ["var(--font-titilium)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        'main' :'#121212',
        'bg': '#ffffff',
        'greeny': '#CAF291',
        'pinky': '#FFB3DB'
      },
      filter: {
        'main': "invert(0%) sepia(7%) saturate(328%) hue-rotate(339deg) brightness(90%) contrast(86%)",
      }
    },
  },
  plugins: [],
}

export default config