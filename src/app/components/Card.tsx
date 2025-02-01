// import { Fragment } from "react";
import "../globals.css";
import Image from "next/image";

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
        <div className="card-frame">
            <div className="card bg-neutral-darkBlue rounded-xl p-6">
                <a className="float-right mt-2">
                    <Image
                        src="/images/icon-ellipsis.svg"
                        width={21}
                        height={5}
                        alt=""
                    />
                </a>
                <h3 className="font-medium">{data.title}</h3>
                <p className="text-[3.1111rem] font-light mt-2">
                    {data.timeframes[timeframe].current}hrs
                </p>
                <p className="text-[0.83333rem] text-[var(--clr-neutral-pale-blue)]">
                    Yesterday - {data.timeframes[timeframe].previous}hrs
                </p>
            </div>
        </div>
    );
}
