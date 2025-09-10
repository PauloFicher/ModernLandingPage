'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            Nuevo: Dark Mode disponible
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Organiza tu trabajo,
            <span className="block gradient-text">
              simplifica tu vida
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            TaskFlow mantiene tus proyectos, tareas y equipos en un solo lugar, 
            con diseño moderno y velocidad que te sorprenderá.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a 
    href="https://taskflow-todos-6k7v.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-primary inline-flex items-center justify-center"
  >
    Ver Demo
  </a>
  <a 
    href="https://taskflow-todos-6k7v.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-secondary inline-flex items-center justify-center"
  >
    Probar Gratis
  </a>
</div>

          {/* Trust Indicators */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-16">
            ✅ Sin tarjeta de crédito • ✅ Setup en 2 minutos • ✅ Cancela cuando quieras
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 bg-white dark:bg-gray-800">
            {/* Browser Bar */}
            <div className="flex items-center gap-2 p-4 bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1 mx-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded text-xs flex items-center px-3 text-gray-500">
                  taskflow.app/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <div className="text-sm text-violet-600 mb-1">Tareas Activas</div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-xs text-green-500">↗ +12% esta semana</div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <div className="text-sm text-blue-600 mb-1">Completadas</div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-xs text-green-500">↗ +8% esta semana</div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <div className="text-sm text-green-600 mb-1">Productividad</div>
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs text-green-500">↗ +5% esta semana</div>
                </div>
              </div>
              
              {/* Task List */}
              <div className="space-y-3">
                {[
                  { task: 'Diseñar nueva landing page', priority: 'Alta', time: '2h', status: 'progress' },
                  { task: 'Reunión con equipo de desarrollo', priority: 'Media', time: '1h', status: 'pending' },
                  { task: 'Revisar propuesta de cliente', priority: 'Baja', time: '30m', status: 'completed' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded bg-white dark:bg-gray-800 shadow-sm">
                    <div className={`w-4 h-4 rounded ${
                      item.status === 'completed' ? 'bg-green-500' : 
                      item.status === 'progress' ? 'bg-violet-500' : 'bg-gray-300'
                    }`}></div>
                    <span className="flex-1 text-sm">{item.task}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.priority === 'Alta' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                      item.priority === 'Media' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}>{item.priority}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 gradient-bg rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-bg rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  )
}