import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: "var(--clr-primary-blue)",
                    work: "var(--clr-primary-work)",
                    play: "var(--clr-primary-play)",
                    study: "var(--clr-primary-study)",
                    exercise: "var(--clr-primary-exercise)",
                    social: "var(--clr-primary-social)",
                    selfCare: "var(--clr-primary-self-care)",
                },
                neutral: {
                    veryDarkBlue: "var(--clr-neutral-very-dark-blue)",
                    darkBlue: "var(--clr-neutral-dark-blue)",
                    desaturatedBlue: "var(--clr-neutral-desaturated-blue)",
                    paleBlue: "var(--clr-neutral-pale-blue)",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [],
} satisfies Config;
