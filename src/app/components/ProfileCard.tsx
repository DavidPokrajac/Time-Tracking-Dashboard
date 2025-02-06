import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="bg-gray-50 text-primary-blue dark:bg-primary-blue dark:text-white rounded-[15px] p-6 flex flex-row md:grid md:col-start-1 md:col-span-2 border-2 border-solid border-neutral-veryDarkBlue dark:border-none">
            <Image
                src="/images/image-jeremy.png"
                width={78}
                height={78}
                alt="A mugshot of a person"
                className="row-start-1 col-start-1 col-end-2 border-[3px] border-solid border-primary-blue dark:border-white rounded-full"
            />
            <div className="grid md:grid-rows-[min-content_1fr] col-start-2 col-end-3 row-start-1 ml-6 md:col-start-1 md:col-end-2 md:row-start-2 md:ml-0">
                <p className="report text-[0.83333rem] row-start-1 text-[var(--clr-neutral-pale-blue)]">
                    Report for
                </p>
                <h2 className="text-[1.3333rem] lg:text-[2.2222rem] row-start-2 font-light">
                    Jeremy Robson
                </h2>
            </div>
        </div>
    );
}
