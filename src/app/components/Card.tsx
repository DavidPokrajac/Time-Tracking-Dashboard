import { Fragment } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardProps {
    data: any;
}

export default function Card({ data }: CardProps) {
    return (
        <div>
            {data.map((d: any, idx: any) => {
                return (
                    <Fragment key={idx}>
                        <h3>{d.title}</h3>
                        <p>{d.timeframes.daily.current}hrs</p>
                        <p>Yesterday - {d.timeframes.daily.previous}hrs</p>
                    </Fragment>
                );
            })}
        </div>
    );
}
