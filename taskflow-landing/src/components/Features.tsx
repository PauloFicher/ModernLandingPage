'use client'

import { Zap, Shield, Moon, BarChart3, Users, Smartphone } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Velocidad moderna",
      description: "Interfaz fluida y sin esperas. Tu productividad no puede esperar por tecnología lenta."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguro",
      description: "Tus datos protegidos en la nube con encriptación de nivel empresarial y backups automáticos."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Dark Mode",
      description: "Ideal para trabajar de día o noche. Tu vista te lo agradecerá con este diseño cuidado."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reportes inteligentes",
      description: "Toma decisiones con datos claros y visualizaciones hermosas que revelan insights."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración en tiempo real",
      description: "Trabaja con tu equipo sin fricciones. Actualizaciones instantáneas para todos."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Móvil primero",
      description: "Diseñado para funcionar perfectamente en cualquier dispositivo, donde sea que estés."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todo lo que necesitás para ser más
            <span className="gradient-text"> productivo</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Herramientas diseñadas para equipos modernos que buscan simplicidad y resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-hover p-8 rounded-2xl bg-white dark:bg-gray-900 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Section - What makes us different */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">¿Por qué TaskFlow es diferente?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">2 min</div>
                <p className="text-gray-600 dark:text-gray-300">Setup completo desde cero</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                <p className="text-gray-600 dark:text-gray-300">Uptime garantizado</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-gray-600 dark:text-gray-300">Soporte cuando lo necesites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}