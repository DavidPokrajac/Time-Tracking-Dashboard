import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    activeTimeframe: string;
    onClick: () => void;
    timeframe: string;
}

export default function Button({
    children,
    activeTimeframe,
    onClick,
    timeframe,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${
                activeTimeframe === timeframe
                    ? "text-white"
                    : "text-[var(--clr-neutral-desaturated-blue)]"
            } hover:text-white hover:cursor-pointer transition delay-50 duration-250 ease-in-out focus-visible:outline-4 focus-visible:outline-dashed focus-visible:outline-transparent focus-visible:outline-offset-2 focus-visible:shadow-[0_3px_1px_#4f46e5]`}
        >
            {children}
        </button>
    );
}
