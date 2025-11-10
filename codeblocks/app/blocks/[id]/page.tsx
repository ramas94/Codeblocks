import { prisma } from "@/database";
import Link from "next/link";


export default async function BlockPage({params,}: {params : Promise<{id:string}>;

}) {
    const blockId = (await params).id;
    const block = await prisma.block.findUnique({
        where: { id: Number(blockId)},
    });

    if (!block) return <p>Block not found</p>

    return(

        <main className="PageBackground">
             <Link href={"/"}><button className="AppButton" id="NavHomeButton">Go Back Home</button></Link>
            <div className="AppBody">
            <div className="CodeHeader">
            <h1 className="text-2xl font-semibold mb-4"> {block.title}</h1> 
            </div>
            <textarea
               className="w-full h-96 p-2 border rounded-md"
                 defaultValue={block.code || ""}

            />
            <Link href={`/blocks/${block.id}/edit`}><button className="AppButton">Edit Code</button></Link>
            <button className="AppButton" id="delete">Delete</button>
            </div>

        </main>
    )
    
}