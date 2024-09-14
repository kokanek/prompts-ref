import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prompts from "../prompts"
import { FaRobot } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { FaImage } from "react-icons/fa6";

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container grid gap-8 px-4 py-8 mx-auto md:px-6 md:grid-cols-2 lg:grid-cols-3">
        {[...prompts, ...prompts, ...prompts].map(prompt =>
          <Card className="group" key={prompt.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {prompt.type === 'TEXT' ? <FaRobot style={{ fontSize: '1.5rem' }} /> : <FaImage style={{ fontSize: '1.2rem' }} />}
                  <Link href="/details"><h3 className="text-lg font-semibold">{prompt.title}</h3></Link>
                </div>
                <Badge variant="outline">{prompt.model}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{prompt.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-medium pb-1">Full prompt:</p>
                    <pre className="text-sm text-muted-foreground border p-2 max-h-32 overflow-auto rounded-md">{prompt.prompt}</pre>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>)}
      </main>
    </div>
  )
}