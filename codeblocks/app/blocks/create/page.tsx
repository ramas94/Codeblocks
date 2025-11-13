import Link from "next/link";
import { prisma } from "@/database";
import { redirect } from "next/navigation";


export default function CreateBlock() {

  async function AddNewBlock(formData:FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const block = await prisma.block.create({data:{title, code}});
    redirect("/");
  }


  return (
    <main className="PageBackground">
      <Link href="/" className="AppButton">Go back Home</Link>
      <div className="AppBody">
      <h1 className="Title">Create a new Code Block</h1> 
      
        <form action ={AddNewBlock} className="AppForm">
        <input name="title" type="text" placeholder="Block Title" className="FormField" id="BlockTitle" />
        <textarea name="code" placeholder="your code goes here..." className="FormField"></textarea>
        <button className="AppButton">Create</button>
        </form>
      
      </div>
    </main>
  );
}
