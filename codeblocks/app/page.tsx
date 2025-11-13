import { prisma } from "@/database";
import Link from "next/link";



export default async function Home() {
  const blocks = await prisma.block.findMany();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Code Blocks</h1>
          <Link
            href="/blocks/create"
            className="AppButton"
          >
            + Create Block
          </Link>
        </header>

        {blocks.length === 0 ? (
          <p className="text-gray-500 italic text-center">
            No blocks yet. Create one to get started!
          </p>
        ) : (
          <ul className="space-y-3">
            {blocks.map((block) => (
              
              <li
                key={block.id}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Link key={block.id} href={`/blocks/${block.id}`} className="block" ><span className="text-gray-800 font-medium">{block.title}</span></Link>
                
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}


