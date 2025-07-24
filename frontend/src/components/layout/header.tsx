"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Jobs", href: "/jobs" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IF</span>
              </div>
              <span className="font-bold text-xl text-white">InternFinder</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-400",
                  pathname === item.href ? "text-teal-400" : "text-gray-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-teal-400 hover:bg-gray-800" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
