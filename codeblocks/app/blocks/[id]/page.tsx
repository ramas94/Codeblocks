import { prisma } from "@/database";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";


export default async function BlockPage({params,}: {params : Promise<{id:string}>;

}) {
    const blockId = (await params).id;
    const block = await prisma.block.findUnique({
        where: { id: Number(blockId)},
    });

    if (!block) return notFound();

    async function deleteBlock() {
    "use server"

    await prisma.block.delete({
        where: {id: Number(blockId)},
    })

    redirect("/")
        
    }

    return(

        <main className="PageBackground">
             <Link href={"/"}><button className="AppButton" id="NavHomeButton">Go Back Home</button></Link>
            <div className="AppBody">
            <div className="CodeHeader">
           
            <h1 className="Title"> {block.title}</h1> 
            </div>
            <p className="FormField" id="CodeTextArea"> {block.code || ""}</p>
    

            <Link href={`/blocks/${block.id}/edit`}><button className="AppButton">Edit Code</button></Link>
             <form action={deleteBlock}>
            <button type="submit" className="AppButton" id="delete">Delete</button>
            </form>
            
            </div>

        </main>
    )
    
}