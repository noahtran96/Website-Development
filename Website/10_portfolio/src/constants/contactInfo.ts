import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  LucideIcon,
} from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "tranthaingochuong@gmail.com",
    href: "mailto:tranthaingochuong@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 77 906 37 10",
    href: "tel:+84779063710",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: "#",
  },
];
