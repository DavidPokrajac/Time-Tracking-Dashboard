/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from "fs";
import CardContainer from "./components/CardContainer";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    console.log(data);

    return (
        <main>
            <section>
                <CardContainer data={data} />
            </section>
        </main>
    );
}
