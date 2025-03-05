'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-background sticky top-0 p-6 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center md:px-[120px]">
        <Link href="/">
          <Image
            alt="logo"
            width={150}
            height={40}
            src={
              'https://cdn.prod.website-files.com/666c0a2a385ccdbbe1372d14/669586ee210ba8c0824aeb63_aa-logo-horizontal.svg'
            }
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:space-x-4 hidden md:flex`}
        >
          <Link href="/">
            <span className="text-black hover:text-primary py-2 md:py-0">
              Home
            </span>
          </Link>
          <Link href="#">
            <span className="text-black hover:text-primary py-2 md:py-0">
              About
            </span>
          </Link>
          <Link href="#">
            <span className="text-black hover:text-primary py-2 md:py-0">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
