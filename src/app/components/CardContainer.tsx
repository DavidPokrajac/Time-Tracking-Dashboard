"use client";

import { useState } from "react";
import Card from "./Card";
import { CardProps } from "./Card";
import ProfileCard from "./ProfileCard";
import Button from "./Button";

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

    const activeTimeframe: string = timeframe;

    return (
        <>
            <div className="grid grid-rows-[65%_35%] col-start-2 col-end-3 row-span-2">
                <ProfileCard />
                <div className="buttons-container bg-neutral-darkBlue flex flex-col justify-evenly items-start px-6 rounded-[15px]">
                    <Button
                        timeframe="daily"
                        activeTimeframe={activeTimeframe}
                        onClick={() => setTimeFrame("daily")}
                    >
                        Daily
                    </Button>
                    <Button
                        timeframe="weekly"
                        activeTimeframe={activeTimeframe}
                        onClick={() => setTimeFrame("weekly")}
                    >
                        Weekly
                    </Button>
                    <Button
                        timeframe="monthly"
                        activeTimeframe={activeTimeframe}
                        onClick={() => setTimeFrame("monthly")}
                    >
                        Monthly
                    </Button>
                </div>
            </div>

            {data.map((d: CardProps["data"], idx: number) => {
                return <Card key={idx} data={d} timeframe={timeframe} />;
            })}
        </>
    );
}
