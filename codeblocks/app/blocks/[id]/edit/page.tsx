import { prisma } from "@/database";
import Link from "next/link";


export default async function EditPage({params,}:{params : Promise<{id:string}>;

}) {

    const blockid = (await params).id;
    const block = await prisma.block.findUnique({
        where:{id: Number(blockid)},
    });
    if (!block) return <p>Block not found</p>

    return(
        <main className="PageBackground">
        <Link href={"/"}><button className="AppButton" id="NavHomeButton">Go Back Home</button></Link>
        <div className="AppBody">  
             <h1 className="Title">{block.title}<i className="iFeedback"> (editing..)</i></h1>
             <form className="AppForm">
                <label> New Title </label>
                <input type="text" defaultValue={block.title} className="FormField" id="BlockTitle"/>
                <label>Edit Code Here:</label>
                <textarea
               className="FormField" id="CodeTextArea"
                 defaultValue={block.code || ""}
                />

             </form>

             <button className="AppButton">Save</button>
             <Link href={`/blocks/${block.id}`}><button className="AppButton" id="delete">Cancel</button></Link>
             
        </div>
        </main>
    )
    
}


