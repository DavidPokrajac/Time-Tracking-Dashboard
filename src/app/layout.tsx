import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./variables.css";
import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Frontend Mentor | Time tracking dashboard",
    description:
        "A time tracking dashboard project from Frontend Mentor website.",
};

const rubik = Rubik({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="text-[length:var(--fs-main)]">
            <body
                className={`${rubik.className} antialiased bg-slate-100 dark:bg-neutral-veryDarkBlue text-white transition-all duration-1000 ease-in-out`}
            >
                {children}
            </body>
        </html>
    );
}
