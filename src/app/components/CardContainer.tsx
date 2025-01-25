/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "./Card";

interface CardContainerProps {
    data: any;
}

export default function CardContainer({ data }: CardContainerProps) {
    const [timeframe, setTimeFrame] = useState("daily");
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
            <Card data={data} timeframe={timeframe} />
        </>
    );
}
