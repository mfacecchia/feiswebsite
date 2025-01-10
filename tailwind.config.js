const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./**/.{html,js}"],
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
        colors: {
            // TODO: Update colors (set `card` and `ghost` foreground colors)
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: "hsl(var(--primary))",
            secondary: "hsl(var(--secondary))",
            card: "hsl(var(--card))",
            ghost: "hsl(var(--ghost))",
        }
    },
},
    plugins: [
    ],
}

