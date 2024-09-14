import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prompts from "../prompts"
import MarkdownPreview from "../MarkdownPreview"
import Navbar from "@/components/Navbar"

export default function Component() {

  const prompt = prompts[0];

  return (
    <div className="w-full min-h-screen bg-background  text-foreground">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 min-h-screen px-4 md:px-16 lg:px-32">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <Card className="p-4">
            <h2 className="text-2xl font-bold">{prompt.title}</h2>
            <p className="text-muted-foreground">
              {prompt.description}
            </p>
            <div className="flex gap-2 mt-4">
              <Badge variant="default">#nocode</Badge>
              <Badge variant="default">🔥 Editors Choice</Badge>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex-col items-center gap-2">
              <h2 className="text-lg">The prompt:</h2>
              <pre className="text-sm text-muted-foreground border p-2 max-h-64 overflow-auto rounded-md">{prompt.prompt}</pre>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <span>Share</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span>Add to Bookmarks</span>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/2">
          <Card className="p-4">
            <div className="p-4">
              <h2 className="text-lg">Sample output:</h2>
              <div className="border p-2 rounded-md">
                <MarkdownPreview content={prompt.output} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}