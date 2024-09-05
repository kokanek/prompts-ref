import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prompts from "../prompts"

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 w-full bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <PauseIcon className="w-6 h-6" />
            <span>Prompts Ref</span>
          </Link>
          <nav className="hidden font-medium space-x-6 lg:flex">
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              All
            </Link>
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              Text
            </Link>
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              Image
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="relative">
              <Input placeholder="Search prompts..." className="pr-10 bg-muted rounded-md" />
              <Button variant="ghost" size="icon" className="absolute inset-y-0 right-0 w-8 h-8 rounded-full">
                <SearchIcon className="w-4 h-4" />
              </Button>
            </form>
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Prompt
            </Button>
          </div>
        </div>
      </header>
      <main className="container grid gap-8 px-4 py-8 mx-auto md:px-6 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map(prompt =>
          <Card className="group" key={prompt.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {prompt.type === 'TEXT' ? <BotIcon className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
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

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}