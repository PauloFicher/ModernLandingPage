'use client'

import { Star, Quote } from 'lucide-react'

export default function SocialProof() {
  const companies = ['Google', 'Spotify', 'Slack', 'Airbnb', 'Netflix', 'Stripe']
  
  const testimonials = [
    {
      name: "María González",
      role: "Product Manager @ TechCorp",
      content: "TaskFlow transformó completamente cómo nuestro equipo maneja proyectos. La interfaz es intuitiva y las funciones de colaboración son excepcionales.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Founder @ StartupXYZ",
      content: "Desde que usamos TaskFlow, nuestra productividad aumentó un 40%. Es la herramienta que todo equipo moderno necesita.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Design Lead @ CreativeStudio",
      content: "El dark mode es perfecto para largas sesiones de trabajo. TaskFlow entiende las necesidades reales de los profesionales.",
      rating: 5
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="text-center mb-20">
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
            Empresas que confían en TaskFlow
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 opacity-60 hover:opacity-100"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros
            <span className="gradient-text"> usuarios</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Más de 10,000 equipos ya mejoraron su productividad con TaskFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-hover p-8 rounded-2xl bg-white dark:bg-gray-900 relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-violet-200 dark:text-violet-800">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <p className="text-gray-600 dark:text-gray-300">Equipos activos</p>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">500K+</div>
            <p className="text-gray-600 dark:text-gray-300">Tareas completadas</p>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <p className="text-gray-600 dark:text-gray-300">Tiempo de actividad</p>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <p className="text-gray-600 dark:text-gray-300">Calificación promedio</p>
          </div>
        </div>
      </div>
    </section>
  )
}