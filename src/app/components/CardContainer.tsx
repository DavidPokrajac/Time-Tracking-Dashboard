/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { CardProps } from "./Card";

interface CardContainerProps {
    data: {
        title: string;
        timeframes: {
            daily: {
                current: number;
                previous: number;
            };
            weekly: {
                current: number;
                previous: number;
            };
            monthly: {
                current: number;
                previous: number;
            };
        };
    }[];
}

export default function CardContainer({ data }: CardContainerProps) {
    const [timeframe, setTimeFrame] = useState<string>("daily");
    const [active, setActive] = useState<string>("daily");

    function handleTimeFrame(event: any) {
        setTimeFrame(event?.target.value);
        setActive(event.target.value);
    }

    return (
        <>
            <div className="grid grid-rows-[65%_35%] col-start-2 col-end-3 row-span-2">
                <div className="bg-primary-blue rounded-[15px] p-6">
                    <Image
                        src="/images/image-jeremy.png"
                        width={78}
                        height={78}
                        alt=""
                        className="border-[3px] border-solid border-white rounded-full"
                    />
                    <p className="text-[0.83333rem] text-[var(--clr-neutral-pale-blue)] mt-8">
                        Report for
                    </p>
                    <h2 className="text-[2.2222rem] font-light">
                        Jeremy Robson
                    </h2>
                </div>
                <div className="buttons-container bg-neutral-darkBlue flex flex-col justify-evenly items-start px-6 text-[var(--clr-neutral-desaturated-blue)] rounded-[15px]">
                    <button
                        className={`${
                            active === timeframe
                                ? "text-white"
                                : "text-gray-950"
                        }`}
                        onClick={() => handleTimeFrame("daily")}
                    >
                        Daily
                    </button>
                    <button
                        className={`${
                            active === timeframe
                                ? "text-white"
                                : "text-gray-950"
                        }`}
                        onClick={() => handleTimeFrame("weekly")}
                    >
                        Weekly
                    </button>
                    <button
                        className={`${
                            active === timeframe ? "text-white" : ""
                        }`}
                        onClick={() => handleTimeFrame("monthly")}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            {data.map((d: CardProps["data"], idx: number) => {
                return <Card key={idx} data={d} timeframe={timeframe} />;
            })}
        </>
    );
}
