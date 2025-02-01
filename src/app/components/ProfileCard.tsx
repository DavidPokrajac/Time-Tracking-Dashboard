import Image from "next/image";

export default function ProfileCard() {
    return (
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
            <h2 className="text-[2.2222rem] font-light">Jeremy Robson</h2>
        </div>
    );
}
