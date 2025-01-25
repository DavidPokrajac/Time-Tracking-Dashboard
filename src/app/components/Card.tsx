import { Fragment } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardProps {
    data: any;
    timeframe: string;
}

export default function Card({ data, timeframe }: CardProps) {
    return (
        <div>
            {data.map((d: any, idx: any) => {
                return (
                    <Fragment key={idx}>
                        <h3>{d.title}</h3>
                        <p>{d.timeframes[timeframe].current}hrs</p>
                        <p>Yesterday - {d.timeframes[timeframe].previous}hrs</p>
                    </Fragment>
                );
            })}
        </div>
    );
}
