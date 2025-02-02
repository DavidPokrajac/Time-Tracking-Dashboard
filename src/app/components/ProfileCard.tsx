import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="grid grid-cols-[100px_1fr] grid-rows-[100px] md:grid-cols-[1fr] md:grid-rows-[min-content_1fr] bg-primary-blue rounded-[15px] p-6 items-center">
            <Image
                src="/images/image-jeremy.png"
                width={78}
                height={78}
                alt=""
                className="row-start-1 col-start-1 col-end-2 border-[3px] border-solid border-white rounded-full"
            />
            <div className="col-start-2 col-end-3 row-start-1 md:col-start-1 md:col-end-2 md:row-start-2">
                <p className="text-[0.83333rem] row-start-1 text-[var(--clr-neutral-pale-blue)]">
                    Report for
                </p>
                <h2 className="text-[24px] md:text-[2.2222rem] row-start-2 font-light">
                    Jeremy Robson
                </h2>
            </div>
        </div>
    );
}
