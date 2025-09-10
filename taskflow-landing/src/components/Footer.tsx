'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Status', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@taskflow.app' },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold gradient-text mb-4">
                TaskFlow
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
                La herramienta de productividad moderna que tu equipo estaba esperando. 
                Simple, poderosa, hermosa.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Producto</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Recursos</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold mb-2">Mantente al día</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Recibe las últimas noticias sobre productividad y actualizaciones de TaskFlow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
  <input 
    type="email"
    placeholder="tu@email.com"
    className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-violet-500"
  />
  <button className="px-4 sm:px-6 py-2 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
    Suscribirse
  </button>
</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2025 TaskFlow. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                Hecho con ❤️ para equipos modernos
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400">Todos los sistemas operativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}