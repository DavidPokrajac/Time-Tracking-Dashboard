import { promises as fs } from "fs";
import CardContainer from "./components/CardContainer";
import "./globals.css";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    console.log(data);

    return (
        <main className="min-h-screen content-center">
            <section className="grid grid-cols-[95%] grid-rows-[200px_repeat(10,_170px)] md:grid-cols-[auto_repeat(4,_minmax(100px,_255px))_auto] md:grid-rows-[235px_235px] gap-6 justify-center">
                <CardContainer data={data} />
            </section>
        </main>
    );
}
