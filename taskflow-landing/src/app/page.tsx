'use client'

import { useState } from 'react'
// Cambiar TODAS las importaciones:
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SocialProof from '../components/SocialProof'
import Pricing from '../components/Pricing'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  )
}