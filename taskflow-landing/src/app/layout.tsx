import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaskFlow - Organiza tu trabajo, simplifica tu vida',
  description: 'TaskFlow es la herramienta de productividad moderna que mantiene tus proyectos, tareas y equipos organizados en un solo lugar.',
  keywords: ['productivity', 'task management', 'project management', 'saas', 'modern'],
  authors: [{ name: 'TaskFlow Team' }],
  openGraph: {
    title: 'TaskFlow - Organiza tu trabajo, simplifica tu vida',
    description: 'La herramienta de productividad que tu equipo estaba esperando.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskFlow - Organiza tu trabajo, simplifica tu vida',
    description: 'La herramienta de productividad que tu equipo estaba esperando.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}