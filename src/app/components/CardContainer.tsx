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
    return (
        <>
            <div>
                <Image
                    src="/images/image-jeremy.png"
                    width={234}
                    height={234}
                    alt=""
                />
                <p>Report for</p>
                <h2>Jeremy Robson</h2>
                <div>
                    <button
                        onClick={() => setTimeFrame("daily")}
                        className="bg-slate-600"
                    >
                        Daily
                    </button>
                    <button
                        onClick={() => setTimeFrame("weekly")}
                        className="bg-slate-600"
                    >
                        Weekly
                    </button>
                    <button
                        onClick={() => setTimeFrame("monthly")}
                        className="bg-slate-600"
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
