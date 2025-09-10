'use client'

import { useState } from 'react'
import { Menu, X, Moon } from 'lucide-react'

interface NavbarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              TaskFlow
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-violet-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5" />
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t animate-fade-in ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-violet-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-primary mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}