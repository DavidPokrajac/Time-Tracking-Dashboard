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
            }`}
        >
            {children}
        </button>
    );
}
