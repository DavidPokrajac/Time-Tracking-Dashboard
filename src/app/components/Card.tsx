// import { Fragment } from "react";
import "../globals.css";

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
    return (
        <div className="card bg-neutral-darkBlue">
            <h3>{data.title}</h3>
            <p>{data.timeframes[timeframe].current}hrs</p>
            <p>Yesterday - {data.timeframes[timeframe].previous}hrs</p>
        </div>
    );
}
