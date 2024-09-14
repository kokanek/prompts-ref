import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaSearch, FaPlus } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

export default function Navbar() {
  return (<header className="sticky top-0 z-20 w-full bg-background border-b">
    <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <FaBookBookmark style={{ fontSize: '1.5rem' }} />
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
            <FaSearch style={{ fontSize: '1rem', marginTop: '0.5rem' }} />
          </Button>
        </form>
        <Button variant="outline">
          <FaPlus style={{ fontSize: '1rem', marginRight: '0.5rem' }} />
          Add Prompt
        </Button>
      </div>
    </div>
  </header>)
}