const autoprefixer = require('autoprefixer');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./**/.{html,js}"],
    daisyui: {
        themes: [],
    },
    darkMode: "class",
    theme: {
    extend: {
        borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
        },
        padding: {
            lg: "var(--padding)",
            md: "calc(var(--padding) - 2px)",
            sm: "calc(var(--padding) - 4px)",
        },
        height: {
            "1.5": "0.3rem"
        },
        colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: "hsl(var(--primary))",
            secondary: "hsl(var(--secondary))",
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))"
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))"
            },
        }
    }
},
    plugins: [
        daisyui
    ],
}

