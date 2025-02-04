import { promises as fs } from "fs";
import CardContainer from "./components/CardContainer";
import "./globals.css";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    console.log(data);

    return (
        <main className="min-h-screen content-center">
            <section className="grid grid-cols-[10px_95%_10px] justify-center grid-rows-[200px_repeat(8,_175px)] md:grid-cols-[20px_repeat(4,_minmax(100px,_255px))_20px] md:grid-rows-[225px_225px] gap-6">
                <CardContainer data={data} />
            </section>
        </main>
    );
}
