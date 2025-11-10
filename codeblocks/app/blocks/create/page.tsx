import Link from "next/link";

export default function CreateBlock() {
  return (
    <main className="PageBackground">
      <Link href="/" className="AppButton">Go back Home</Link>
      <div className="AppBody">
      <h1 className="Title">Create a new Code Block</h1> 
      <form className="AppForm">
      <input type="text" placeholder="Block Title" className="FormField" id="BlockTitle" />
      <textarea placeholder="your code goes here..." className="FormField"></textarea>
      <button className="AppButton">Create</button>
      </form>
      </div>
    </main>
  );
}
