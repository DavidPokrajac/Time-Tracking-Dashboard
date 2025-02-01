import type { Metadata } from "next";
// import { Rubik } from "next/font/google";
import "./variables.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Frontend Mentor | Time tracking dashboard",
    description:
        "A time tracking dashboard project from Frontend Mentor website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="text-[length:var(--fs-main)]">
            <body className={`antialiased bg-neutral-veryDarkBlue text-white`}>
                {children}
            </body>
        </html>
    );
}
