import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"

const Homepage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button variant="destructive" size="lg" className="rounded-full">
        <CirclePlus />
        Click me!
      </Button>
    </div>
  )
}

export default Homepage
