# 🚀 TaskFlow Landing Page

Una landing page moderna y responsiva para TaskFlow, una plataforma SaaS de productividad. Construida con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Demo en vivo

🔗 **[Ver demo](https://taskflow-landing.vercel.app)** *(Reemplazar con tu URL de Vercel)*

## 📸 Preview

![TaskFlow Landing Page](https://via.placeholder.com/1200x600/6366f1/ffffff?text=TaskFlow+Landing+Page)

## 🛠 Tecnologías utilizadas

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?style=flat&logo=framer)

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Para desarrollo type-safe
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones suaves y modernas
- **Lucide React** - Iconos SVG optimizados

## 🎨 Características

### ✅ Diseño moderno
- Gradients violeta/azul de tendencia
- Tipografía Inter profesional
- Espaciado generoso y jerarquía visual clara
- Componentes con hover effects elegantes

### 📱 Totalmente responsivo
- Diseño móvil-first
- Breakpoints optimizados para todas las pantallas
- Menú hamburguesa para dispositivos móviles
- Grid responsivo en todas las secciones

### 🌙 Dark/Light mode
- Toggle funcional entre temas
- Persistencia de preferencia del usuario
- Transiciones suaves entre modos
- Colores optimizados para ambos temas

### 🎭 Animaciones suaves
- Fade-in y slide-up animations
- Hover effects en botones y tarjetas
- Elementos flotantes con animación pulse
- Micro-interacciones en toda la página

### 📄 Secciones completas
- **Hero** - CTA principal con mockup de dashboard
- **Features** - Grid de características con iconos
- **Social Proof** - Testimonios y logos de empresas
- **Pricing** - Planes con comparación de features
- **CTA Final** - Llamada a la acción con gradient
- **Footer** - Links organizados y newsletter

## 🚀 Inicio rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/taskflow-landing.git
cd taskflow-landing
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 📁 Estructura del proyecto

```
taskflow-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── SocialProof.tsx
│   ├── Pricing.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
  }
}
```

### Tipografía
Usando Inter de Google Fonts, configurada en `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

### Animaciones
Animaciones personalizadas definidas en Tailwind:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
}
```

## 📦 Deploy

### Vercel (Recomendado)
1. Sube tu código a GitHub
2. Conecta tu repo en [Vercel](https://vercel.com)
3. Deploy automático en cada push

### Netlify
```bash
npm run build
```
Sube la carpeta `out/` a Netlify

### Otros hosts
El proyecto se puede desplegar en cualquier host que soporte Next.js estático.

## 🔧 Scripts disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build para producción
npm run start      # Servidor de producción
npm run lint       # Linter ESLint
```

## 📈 Performance

- **Core Web Vitals** optimizados
- **Images** optimizadas con Next.js Image
- **Fonts** con display: swap
- **CSS** purgado con Tailwind
- **JavaScript** code-splitting automático

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- Email: tu@email.com

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Lucide](https://lucide.dev/) por los iconos
- [Vercel](https://vercel.com/) por el hosting

---

⭐ **¡Dale una estrella si te gustó el proyecto!**