'use client'

import { Check, Zap } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Ideal para uso personal y equipos pequeños",
      features: [
        "Hasta 5 proyectos",
        "Tareas ilimitadas",
        "Colaboradores limitados (3)",
        "Almacenamiento 1GB",
        "Soporte por email",
        "Diseño básico"
      ],
      buttonText: "Comenzar gratis",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      description: "Para equipos que necesitan más control y funciones avanzadas",
      features: [
        "Proyectos ilimitados",
        "Colaboradores ilimitados",
        "Colaboración en tiempo real",
        "Almacenamiento 100GB",
        "Reportes avanzados",
        "Soporte prioritario",
        "Integraciones con Slack, Google",
        "API access",
        "Custom branding"
      ],
      buttonText: "Probar 14 días gratis",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "Para grandes organizaciones con necesidades específicas",
      features: [
        "Todo lo de Pro +",
        "SSO y seguridad avanzada",
        "Administración de usuarios",
        "Soporte dedicado 24/7",
        "Entrenamiento personalizado",
        "SLA garantizado",
        "Compliance (SOC2, GDPR)",
        "On-premise deployment",
        "Custom integrations"
      ],
      buttonText: "Contactar ventas",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Precios que se adaptan a tu
            <span className="gradient-text"> equipo</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Desde equipos individuales hasta grandes empresas. Siempre con 14 días de prueba gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-violet-500 bg-white dark:bg-gray-900 scale-105' 
                  : 'bg-white dark:bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/mes</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Additional info for Free plan */}
              {plan.name === 'Free' && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Sin tarjeta de crédito requerida
                </p>
              )}

              {/* Additional info for Pro plan */}
              {plan.name === 'Pro' && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Luego $29/mes. Cancela cuando quieras.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Preguntas frecuentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
              <p className="text-gray-600 dark:text-gray-300">Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican inmediatamente.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Qué métodos de pago aceptan?</h4>
              <p className="text-gray-600 dark:text-gray-300">Aceptamos todas las tarjetas principales (Visa, Mastercard, AMEX) y PayPal.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Hay descuentos por pago anual?</h4>
              <p className="text-gray-600 dark:text-gray-300">Sí, obtienes 2 meses gratis pagando anualmente. Un ahorro del 16%.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Qué pasa con mis datos si cancelo?</h4>
              <p className="text-gray-600 dark:text-gray-300">Puedes exportar todos tus datos antes de cancelar. Los mantenemos por 30 días por si cambias de opinión.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}