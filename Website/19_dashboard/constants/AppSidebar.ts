import {
  Calendar,
  Home,
  Inbox,
  LucideIcon,
  Search,
  Settings,
} from "lucide-react"

export interface ItemType {
  id: number
  title: string
  url: string
  icon: LucideIcon
}

export const ITEMS: ItemType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    id: 3,
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
