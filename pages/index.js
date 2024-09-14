import prompts from "../prompts"
import Navbar from "@/components/Navbar";
import PromptCard from "@/components/PromptCard";

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container grid gap-8 px-4 py-8 mx-auto md:px-6 md:grid-cols-2 lg:grid-cols-3">
        {[...prompts, ...prompts, ...prompts].map(prompt =>
          <PromptCard prompt={prompt} key={prompt.id} />
        )}
      </main>
    </div>
  )
}