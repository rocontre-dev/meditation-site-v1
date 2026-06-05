# Espacio Interior - Sitio de Meditación

Un sitio web profesional para servicios de meditación, acompañamiento personal y retiros en silencio.

## Tecnologías utilizadas

- **React** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **JavaScript (ES6+)** - Lenguaje de programación

## Estructura del proyecto

```
meditation-site/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Button.jsx       # Componente de botón
│   │   ├── Card.jsx         # Componente de tarjeta
│   │   ├── Header.jsx       # Encabezado con navegación
│   │   └── Footer.jsx       # Pie de página
│   ├── sections/            # Secciones de la landing page
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── Services.jsx     # Servicios principales
│   │   ├── OnlineCourse.jsx # Curso en línea
│   │   ├── Community.jsx    # Comunidad
│   │   ├── Retreats.jsx     # Retiros
│   │   ├── Reprogramming.jsx# Servicio de reprogramación
│   │   └── Contact.jsx      # Formulario de contacto
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos de la app
│   ├── index.css            # Estilos globales con Tailwind
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal
├── vite.config.js           # Configuración de Vite
└── package.json             # Dependencias del proyecto
```

## Instalación y desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

4. Vista previa de la build de producción:
```bash
npm run preview
```

## Secciones del sitio

1. **Hero** - Portada con título principal y llamadas a la acción
2. **Servicios** - Cards con los 5 servicios principales
3. **Curso en línea** - Descripción del curso grabado con acompañamiento
4. **Comunidad** - Información sobre la comunidad de práctica
5. **Retiros** - Fechas disponibles de retiros en silencio
6. **Reprogramación** - Servicio de reprogramación personal
7. **Contacto** - Formulario de contacto funcional

## Diseño responsive

El sitio está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Paleta de colores

- **Principal**: Tonos stone (piedra) para elegancia y calidez
- **Acento**: Amber (ámbar) para elementos destacados
- **Fondo**: Blanco y stone-50 para secciones alternas

## Notas importantes

- Este es un sitio frontend sin backend integrado
- El formulario de contacto simula el envío (no guarda datos)
- Los retiros usan datos mock para demostración
- No hay sistema de pagos ni login implementado

## Próximos pasos (para producción)

- Integrar backend para el formulario de contacto
- Implementar sistema de pagos
- Añadir imágenes reales
- Configurar dominio y hosting
- Implementar analytics
- Añadir sistema de newsletter

## Licencia

Este proyecto es para uso del cliente. Todos los derechos reservados.