import { Moon } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left side */}
      collapsebutton
      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="/Avatar.jpg" />
          <AvatarFallback>NT</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
