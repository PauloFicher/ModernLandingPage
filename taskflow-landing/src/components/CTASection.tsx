'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background with gradient */}
          <div className="absolute inset-0 gradient-bg"></div>
          
          {/* Background pattern/effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative p-12 md:p-16 lg:p-20 text-center text-white">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Main CTA Content */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empieza gratis hoy mismo
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Únete a más de 10,000 equipos que ya transformaron su productividad. 
              Setup en 2 minutos, sin tarjeta de crédito.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-white text-violet-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                Comenzar ahora gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Agendar demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Sin setup complejo
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                14 días de prueba
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Soporte en español
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Cancela cuando quieras
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Final push */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ¿Todavía no estás convencido? 
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              ⭐⭐⭐⭐⭐ <span className="font-medium">4.9/5 en reviews</span>
            </div>
            <div className="flex items-center gap-2">
              🏆 <span className="font-medium">Producto del año 2024</span>
            </div>
            <div className="flex items-center gap-2">
              🔒 <span className="font-medium">SOC2 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}