"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../globals.css";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export interface CardProps {
    data: {
        title: string;
        timeframes: {
            [key: string]: {
                current: number;
                previous: number;
            };
        };
    };
    timeframe: string;
}

export default function Card({ data, timeframe }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
        tl.to(cardRef.current, {
            height: 0,
            contentVisibility: "hidden",
            duration: 0.5,
            ease: "power2.out",
        });
        tl.to(cardRef.current, {
            height: cardRef?.current?.clientHeight,
            duration: 0.5,
            stagger: 0.75,
            ease: "power2.out",
        });
        tl.to(cardRef.current, {
            contentVisibility: "visible",
        });
    }, [timeframe]);

    return (
        <div className="card-frame">
            <div
                ref={cardRef}
                className="card text-black bg-white dark:text-white dark:bg-neutral-darkBlue rounded-xl p-6 dark:hover:bg-[#33397A] hover:cursor-pointer transition delay-50 duration-300 ease-out"
            >
                <a className="float-right mt-2">
                    <Image
                        src="/images/icon-ellipsis.svg"
                        width={21}
                        height={5}
                        alt=""
                        className="hover:brightness-[2] transition delay-75 duration-75 ease-in-out"
                    />
                </a>
                <h3 className="font-medium">{data.title}</h3>
                <div className="card-stats mt-2 flex flex-row justify-between items-center md:flex-col md:items-start">
                    <p className="text-[1.7778rem] md:text-[2.25rem] lg:text-[3.1111rem] font-light">
                        {data.timeframes[timeframe].current}hrs
                    </p>
                    <p className="text-[0.83333rem] text-[var(--clr-neutral-pale-blue)]">
                        Yesterday - {data.timeframes[timeframe].previous}hrs
                    </p>
                </div>
            </div>
        </div>
    );
}
