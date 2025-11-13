import { prisma } from "@/database";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function EditPage({params,}:{params : Promise<{id:string}>;

}) {

    const blockid = (await params).id;
    const block = await prisma.block.findUnique({
        where:{id: Number(blockid)},
    });
    if (!block) return <p>Block not found</p>

    async function updateBlock(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        await prisma.block.update({
            where: {id: Number(blockid)},
            data: {title, code},
        });

        revalidatePath("/");
        revalidatePath(`/blocks/${blockid}`);
        redirect(`/blocks/${blockid}`);
    }

    return(
        <main className="PageBackground">
        <Link href={"/"}><button className="AppButton" id="NavHomeButton">Go Back Home</button></Link>
        <div className="AppBody">  
             <h1 className="Title">{block.title}<i className="iFeedback"> (editing..)</i></h1>
             <form action={updateBlock} className="AppForm">
                <label> New Title </label>
                <input type="text" name="title" defaultValue={block.title} className="FormField" id="BlockTitle"/>
                <label>Edit Code Here:</label>
                <textarea
                name="code"
               className="FormField" id="CodeTextArea"
                 defaultValue={block.code || ""}
                />
            <div>
            <button className="AppButton">Save</button>
             <Link href={`/blocks/${block.id}`}><button className="AppButton" id="delete">Cancel</button></Link>
            </div>  

             </form>

            
            
             
        </div>
        </main>
    )
    
}


