import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { FaRobot } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge"
import { FaRegCopy } from "react-icons/fa";

export default function PromptCard({ prompt }) {
  return (
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
            <div >
              <div className="flex items-center justify-between">
                <p className="font-medium pb-1">Full prompt:</p>
                <FaRegCopy style={{ fontSize: '1rem' }} />
              </div>
              <pre className="text-sm text-muted-foreground border p-2 max-h-32 overflow-auto rounded-md">{prompt.prompt}</pre>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>)
}