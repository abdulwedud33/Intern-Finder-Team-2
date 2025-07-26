"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, ChevronRight } from "lucide-react"
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
  const [isOpen, setIsOpen] = useState(false)

  const hideRoutes = ["/login", "/signup"]
  if (hideRoutes.includes(pathname)) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IF</span>
            </div>
            <span className="font-bold text-xl text-white">InternFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-400",
                  pathname === item.href ? "text-teal-400" : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-teal-400 hover:bg-gray-800" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (from right) */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-700">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-teal-400">
            <div className="rounded-full bg-gray-700 p-1">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="px-4 py-4 space-y-4">
          <nav className="flex flex-col justify-center gap-3 ml-25 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-teal-400",
                  pathname === item.href ? "text-teal-400" : "text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 space-y-2">
            <Button variant="ghost" className="text-white hover:text-teal-400 hover:bg-gray-700 w-full" asChild>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full" asChild>
              <Link href="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
