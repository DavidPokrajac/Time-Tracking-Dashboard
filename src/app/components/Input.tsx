"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function Input() {
    const [darkMode, setDarkMode] = useState<string>("");

    function handleMode(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            setDarkMode("dark");
        } else {
            setDarkMode("light");
        }
    }

    useEffect(() => {
        const colorTheme = localStorage.getItem("color-theme") as string;
        setDarkMode(colorTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("color-theme", darkMode);
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [darkMode]);

    return (
        <span className="text-primary-blue mt-10 mb-10 mx-auto flex items-center gap-5 md:mt-0">
            Dark mode:
            <label>
                <input
                    type="checkbox"
                    onChange={handleMode}
                    className="focus-visible:outline focus-visible:outline-1 focus-visible:outline-transparent focus-visible:shadow-md focus-visible:shadow-[var(--clr-primary-blue)]"
                />
            </label>
        </span>
    );
}
