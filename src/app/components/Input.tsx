"use client";

import { useState, useEffect } from "react";

export default function Input() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    useEffect(() => {
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                localStorage.setItem("saved", "true");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                localStorage.setItem("saved", "false");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
                localStorage.setItem("saved", "false");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
                localStorage.setItem("saved", "true");
            }
        }
    }, [darkMode]);

    return (
        <span className="text-primary-blue mb-10 mx-auto flex items-center gap-5">
            Dark mode:
            <label>
                <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                />
            </label>
        </span>
    );
}
