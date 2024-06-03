import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        bouncing: {
          '0%': {transform: 'translateY(-500px)'},
          '60%': {transform: 'translateY(0)'},
          '80%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0px)'}
        },
        blob: {
          '0%': {transform: 'translate(0px, 0px) scale(1)'},
          '33%': {transform: 'translate(30px, -30px) scale(1.1)'},
          '66%': {transform: 'translate(-20px, 20px) scale(0.9)'},
          '100%': {transform: 'translate(0px, 0px) scale(1)'}
        },
        appear: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        appear2: {
          '0%': { transform:'scale(0)'},
          '100%': { transform:'scale(1)'}
        },
        disappear: {
          '0%': {transform:'scale(1)', opacity: '1'},
          '100%': {transform:'scale(0)' , opacity: '0'}
        },
        slide: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        rotate:{
          '0%': {transform: 'rotate(0)'},
          '10%': {transform: 'rotate(360deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        explode: {
          "0%" : {"border-radius": "9999px", transform: "scale(.9)"},
          "20%" : {"border-radius": "9999px", transform: "scale(0.8)"},
          "100%" :{"border-radius": "9999px", transform: "scale(2.0)"},
        },
        open: {
          '0%': {transform: "scale(0)" },
          '100%': {transform: "scale(1)" },
        },
        close: {
          '0%': {height: '230px'},
          '100%': {height: "0px"},
        },
        blob2: {
          '0%': {"border-radius": "60% 40% 30% 70% / 60% 30% 60% 40%", "background-size": "100% 100%"},
          '50%': {"border-radius": "30% 60% 70% 40% / 50% 30% 70% 60%", "background-size": "300% 150%"},
          '100%': {"border-radius": "60% 40% 30% 70% / 60% 30% 60% 40%", "background-size": "100% 100%"}
        },
        circle: {
          to: {"border-radius": "9999px"}
        },
        appearBlue: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        appearRed: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        appearBlack:{
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideLeft: {
          '0%': {transform: 'translate(0, 0) scale(1)'},
          '100%': {transform: 'translate(-100%, 250%) scale(0.5)', opacity: '0'},
        },
        moveUp: {
          '0%': {transform: 'translate(-50%, -50%) ', top: '100%'
          },
          '50%': {transform: 'translate(-50%, -50%) scale(0.5)', top: '50%'
        },
        '100%': {transform: 'translate(-50%, -50%) ', top: '0%'
          },
        },
        moveDown: {
          '0%': {transform: 'translate(-50%, -50%) ', top: '0%'
          },
          '50%': {transform: 'translate(-50%, -50%)  scale(0.5)', top: '50%'
        },
        '100%': {transform: 'translate(-50%, -50%) ', top: '100%'
          },
        },
        appearArrow:{
          '0%': {transform: "rotate(-90deg)", top: "100%", width: '0px'},
          '100%': {transform: "rotate(-45deg)", top: "50%", width: '20px'}
        },
        openCard: {
          '0%': {top:'0', left: '0'},
          '100%': {top:'25px', left: '25px'}
        },
        openCard2: { 
          '100%': {transform: 'scale(1)', opacity: '1'}
        },
        spinNscale: {
          '0%': {transform: 'scale(1) translateX(-50%)', rotate: "0"
          },
          '50%': {transform: 'scale(0.5) translateX(-100%)', rotate: "90deg"
        },
        '100%': {transform: 'scale(1) translateX(-50%)', rotate: "180deg"
          },
        }
      },
      animation: {
        bouncing: 'bouncing 2s ease-in-out',
        blob: 'blob 10s infinite',
        appear: 'appear 3s',
        disappear: 'disappear 2s',
        slide: 'slide 8s infinite linear',
        rotate: 'rotate 4s infinite linear',
        explode: 'explode .5s',
        open: 'open 1s ease-in-out',
        close: 'close .5s linear',
        blob2: 'blob2 8s infinite ease-in-out',
        circle: 'circle 2s ease-in-out',
        appearBlue: 'appearBlue 1s',
        appearRed: 'appearRed 1s',
        appearBlack: 'appearBlack 1s',
        slideLeft: 'slideLeft 0.5s forwards',
        appearFast: 'appear 0.5s',
        moveUp: 'moveUp 2s linear forwards',
        moveDown: 'moveDown 2s linear forwards',
        appearArrow: 'appearArrow 0.2s',
        openCard: 'openCard ease',
        openCard2: 'openCard2 ease',
        spinNscale: 'spinNscale linear',
        appear2: 'appear2 linear forwards'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
