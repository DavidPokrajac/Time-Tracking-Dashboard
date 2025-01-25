/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from "fs";
import Image from "next/image";
import Card from "./components/Card";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    console.log(data);

    return (
        <main>
            <section>
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
                        <button>Daily</button>
                        <button>Weekly</button>
                        <button>Monthly</button>
                    </div>
                </div>
                <Card data={data} />
            </section>
        </main>
    );
}
