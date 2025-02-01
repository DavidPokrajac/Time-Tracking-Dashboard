import { promises as fs } from "fs";
import CardContainer from "./components/CardContainer";
import "./globals.css";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    console.log(data);

    return (
        <main className="min-h-screen content-center">
            <section className="grid grid-cols-[auto_repeat(4,_minmax(100px,_255px))_auto] grid-rows-[235px_235px] gap-4">
                <CardContainer data={data} />
            </section>
        </main>
    );
}
