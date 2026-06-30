# 🌿 Zen Garden — Visual Style Guide

> **Sistema de diseño oficial del proyecto meditation-site**
>
> Versión 1.0 — Fase 1

---

## 📖 Índice

1. [Filosofía Zen Garden](#filosofía-zen-garden)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Radios y Bordes](#radios-y-bordes)
5. [Sombras](#sombras)
6. [Transiciones](#transiciones)
7. [Glassmorphism](#glassmorphism)
8. [Espaciado](#espaciado)
9. [Fondos y Decoraciones](#fondos-y-decoraciones)
10. [Animaciones](#animaciones)
11. [Uso Correcto e Incorrecto](#uso-correcto-e-incorrecto)
12. [Componentes Previstos](#componentes-previstos)
13. [Mejores Prácticas](#mejores-prácticas)

---

## 🧘 Filosofía Zen Garden

Zen Garden es más que un sistema de diseño — es una filosofía visual inspirada en:

- **Jardines zen japoneses**: Minimalismo, espacios vacíos, armonía
- **Wabi-sabi**: Belleza en la imperfección, texturas orgánicas
- **Luz natural filtrada**: Sombras suaves, gradientes sutiles
- **Elementos naturales**: Musgo, salvia, arena, piedra, madera

### Principios Fundamentales

1. **Calma visual**: Nada grita, todo susurra
2. **Profundidad sutil**: Capas que se revelan gradualmente
3. **Organicidad**: Bordes redondeados, formas suaves
4. **Luz difusa**: Sin contrastes agresivos
5. **Espacio negativo**: El vacío es tan importante como el contenido

---

## 🎨 Paleta de Colores

### Colores Principales

| Nombre | Variable | Hex | Uso |
|--------|----------|-----|-----|
| **Moss** (Musgo) | `--zen-moss` | `#7D8C7A` | Color primario, enlaces, acentos |
| **Sage** (Salvia) | `--zen-sage` | `#B6C2AE` | Color secundario, bordes sutiles |
| **Sand** (Arena) | `--zen-sand` | `#E8E3D7` | Fondo primario |
| **Warm Sand** (Arena Cálida) | `--zen-warm-sand` | `#D1C2A1` | Acentos cálidos, fondos secundarios |
| **Deep** (Profundo) | `--zen-deep` | `#3E4B3F` | Texto principal, footer |
| **Cream** (Crema) | `--zen-cream` | `#F7F3ED` | Fondo base global |
| **Soft** (Suave) | `--zen-soft` | `#F0EDE5` | Fondo secundario |
| **Muted** (Atenuado) | `--zen-muted` | `#5A6B5C` | Texto secundario |
| **Border** (Borde) | `--zen-border` | `#CDD7C9` | Bordes sutiles |

### Jerarquía de Texto

```css
/* Texto principal - máximo contraste */
color: var(--zen-deep);        /* #3E4B3F */

/* Texto secundario - contraste medio */
color: var(--zen-muted);       /* #5A6B5C */

/* Texto tenue - énfasis sutil */
color: var(--zen-moss);        /* #7D8C7A */
```

### ✅ Uso Correcto de Colores

- Usar `--zen-cream` como fondo base global
- Usar `--zen-deep` para texto principal
- Usar `--zen-moss` para enlaces y estados hover
- Usar `--zen-sage` para elementos decorativos sutiles
- Usar `--zen-border` para分隔 sutiles entre secciones

### ❌ Uso Incorrecto

- ~~Nunca usar negro puro (`#000000`)~~
- ~~Nunca usar blanco puro (`#FFFFFF`)~~
- ~~Nunca usar colores neón o saturados~~
- ~~Nunca crear contrastes agresivos~~

---

## 📝 Tipografía

### Sistema Tipográfico

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-font-xs` | 0.75rem (12px) | Texto muy pequeño, metadata |
| `--zen-font-sm` | 0.875rem (14px) | Texto secundario, captions |
| `--zen-font-base` | 1rem (16px) | Cuerpo de texto |
| `--zen-font-md` | 1.125rem (18px) | Párrafos destacados |
| `--zen-font-lg` | 1.25rem (20px) | Subtítulos |
| `--zen-font-xl` | 1.5rem (24px) | Títulos pequeños |
| `--zen-font-2xl` | 2rem (32px) | Títulos medianos |
| `--zen-font-3xl` | 2.5rem (40px) | Títulos grandes |
| `--zen-font-4xl` | 3rem (48px) | Hero titles |

### Pesos de Fuente

```css
--zen-font-light: 300;
--zen-font-regular: 400;
--zen-font-medium: 500;
--zen-font-semibold: 600;
--zen-font-bold: 700;
```

### Altura de Línea

```css
--zen-leading-tight: 1.25;     /* Títulos */
--zen-leading-normal: 1.5;     /* Cuerpo */
--zen-leading-relaxed: 1.75;   /* Párrafos amplios */
--zen-leading-loose: 2;        /* Espaciado generoso */
```

---

## 🔘 Radios y Bordes

### Escala de Radios

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-radius-sm` | 8px | Botones pequeños, inputs |
| `--zen-radius-md` | 16px | Tarjetas pequeñas |
| `--zen-radius-lg` | 24px | Tarjetas medianas |
| `--zen-radius-xl` | 32px | Tarjetas grandes, contenedores |
| `--zen-radius-2xl` | 48px | Elementos muy redondeados |
| `--zen-radius-full` | 9999px | Círculos completos, orbs |

### Filosofía de Bordes

> *"Los bordes redondeados imitan las formas de la naturaleza — piedras de río, hojas, gotas de agua. Nada en la naturaleza tiene esquinas perfectas de 90°."*

---

## 🌑 Sombras

### Sistema de Sombras

Todas las sombras usan `rgba(62, 75, 63, X)` — nunca negro puro.

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-shadow-soft` | `0 4px 20px rgba(62,75,63,0.06)` | Elevación mínima |
| `--zen-shadow-medium` | `0 12px 36px rgba(62,75,63,0.08)` | Tarjetas |
| `--zen-shadow-glass` | `0 8px 32px rgba(62,75,63,0.07)` | Glassmorphism |
| `--zen-shadow-elevated` | `0 20px 60px rgba(62,75,63,0.1)` | Elementos destacados |
| `--zen-shadow-float` | `0 16px 48px rgba(62,75,63,0.09)` | Efecto levitación |
| `--zen-shadow-inner` | `inset 0 2px 8px rgba(62,75,63,0.04)` | Profundidad interna |

### Uso de Sombras

```css
/* Tarjeta estándar */
.card {
  box-shadow: var(--zen-shadow-medium);
}

/* Al hacer hover, elevar */
.card:hover {
  box-shadow: var(--zen-shadow-elevated);
  transform: translateY(-2px);
}
```

---

## 🔄 Transiciones

### Duraciones

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-transition-fast` | 150ms ease | Micro-interacciones |
| `--zen-transition-normal` | 300ms ease | La mayoría de transiciones |
| `--zen-transition-slow` | 500ms ease | Transiciones destacadas |
| `--zen-transition-slower` | 800ms ease | Transiciones muy suaves |

### Curvas de Easing Personalizadas

```css
--zen-ease-out-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--zen-ease-in-out-gentle: cubic-bezier(0.4, 0, 0.2, 1);
```

### Uso Recomendado

```css
/* Transición suave en todos los estados */
.element {
  transition: all var(--zen-transition-normal);
}

/* Para interacciones rápidas */
.button {
  transition: background-color var(--zen-transition-fast);
}
```

---

## 🪟 Glassmorphism

### Variables Glassmorphism

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-glass-blur` | 14px | Blur del backdrop |
| `--zen-glass-bg` | `rgba(247,243,237,0.78)` | Fondo claro |
| `--zen-glass-bg-light` | `rgba(247,243,237,0.6)` | Fondo más translúcido |
| `--zen-glass-bg-dark` | `rgba(62,75,63,0.7)` | Fondo oscuro |
| `--zen-glass-border` | `rgba(182,194,174,0.45)` | Borde sutil |
| `--zen-glass-border-light` | `rgba(182,194,174,0.25)` | Borde muy sutil |

### Clases Predefinidas

```html
<!-- Glassmorphism claro -->
<div class="zen-glass">
  Contenido con efecto vidrio
</div>

<!-- Glassmorphism oscuro -->
<div class="zen-glass-dark">
  Contenido con efecto vidrio oscuro
</div>
```

### Implementación Manual

```css
.glass-element {
  background: var(--zen-glass-bg);
  backdrop-filter: blur(var(--zen-glass-blur));
  -webkit-backdrop-filter: blur(var(--zen-glass-blur));
  border: 1px solid var(--zen-glass-border);
  box-shadow: var(--zen-shadow-glass);
}
```

---

## 📐 Espaciado

### Escala de Espaciado

Basada en múltiplos de 4px para ritmo consistente.

| Variable | Valor | Uso |
|----------|-------|-----|
| `--zen-space-1` | 4px | Espacio mínimo |
| `--zen-space-2` | 8px | Espacio pequeño |
| `--zen-space-3` | 12px | Espacio compacto |
| `--zen-space-4` | 16px | Espacio estándar |
| `--zen-space-5` | 20px | Espacio cómodo |
| `--zen-space-6` | 24px | Espacio generoso |
| `--zen-space-8` | 32px | Separación de secciones |
| `--zen-space-10` | 40px | Separación amplia |
| `--zen-space-12` | 48px | Separación de secciones grandes |
| `--zen-space-16` | 64px | Espaciado hero |
| `--zen-space-20` | 80px | Espaciado entre secciones |
| `--zen-space-24` | 96px | Espaciado muy amplio |
| `--zen-space-32` | 128px | Espaciado máximo |

---

## 🌅 Fondos y Decoraciones

### Clases de Fondo

```css
/* Fondo global con gradientes radiales */
.zen-background {
  background:
    radial-gradient(circle at top left, rgba(182,194,174,0.25), transparent 35%),
    radial-gradient(circle at bottom right, rgba(209,194,161,0.22), transparent 30%),
    var(--zen-cream);
}

/* Contenedor de sección */
.zen-section {
  position: relative;
  overflow: hidden;
}
```

### Elementos Decorativos

#### Orbs (Círculos Difuminados)

```html
<!-- Orb decorativo de musgo -->
<div class="zen-orb zen-orb--moss" style="width: 200px; height: 200px; top: 10%; left: 5%;"></div>

<!-- Orb de salvia -->
<div class="zen-orb zen-orb--sage" style="width: 300px; height: 300px; bottom: 20%; right: 10%;"></div>

<!-- Orb de arena cálida -->
<div class="zen-orb zen-orb--warm" style="width: 250px; height: 250px; top: 50%; left: 50%;"></div>
```

#### Luces Ambientales

```html
<!-- Luz ambiental en esquina superior izquierda -->
<div class="zen-ambient-light zen-ambient-light--top-left"></div>

<!-- Luz cálida en esquina inferior derecha -->
<div class="zen-ambient-light zen-ambient-light--warm zen-ambient-light--bottom-right"></div>
```

#### Gradientes Superpuestos

```html
<!-- Gradiente suave de claro a transparente -->
<div class="zen-gradient-overlay"></div>

<!-- Gradiente oscuro para secciones oscuras -->
<div class="zen-gradient-overlay zen-gradient-overlay--dark"></div>
```

#### Glow (Luz Ambiental)

```html
<!-- Elemento glow genérico -->
<div class="zen-glow" style="width: 150px; height: 150px; background: var(--zen-sage);"></div>
```

---

## ✨ Animaciones

### Animaciones Predefinidas

| Clase | Descripción | Duración |
|-------|-------------|----------|
| `.zen-animate-fade-in` | Aparece suavemente desde abajo | 0.6s |
| `.zen-animate-float` | Levitación continua | 6s (loop) |
| `.zen-animate-pulse` | Pulsación de respiración | 4s (loop) |
| `.zen-animate-glow` | Glow que respira | 8s (loop) |
| `.zen-animate-slide-left` | Desliza desde la izquierda | 0.8s |
| `.zen-animate-slide-right` | Desliza desde la derecha | 0.8s |

### Uso de Animaciones

```html
<!-- Elemento que aparece al cargar -->
<div class="zen-animate-fade-in">
  Contenido que aparece suavemente
</div>

<!-- Elemento flotante decorativo -->
<div class="zen-animate-float">
  Elemento que flota
</div>
```

### Efecto Float en Hover

```css
/* La clase .zen-float añade elevación en hover */
<div class="zen-float">
  Tarjeta que se eleva al pasar el cursor
</div>
```

---

## ✅ Uso Correcto e Incorrecto

### ✅ CORRECTO

```css
/* Sombras suaves con el color base */
box-shadow: var(--zen-shadow-medium);

/* Bordes redondeados generosos */
border-radius: var(--zen-radius-xl);

/* Transiciones suaves */
transition: all var(--zen-transition-normal);

/* Fondos con gradientes radiales sutiles */
background: radial-gradient(circle at top left, rgba(182,194,174,0.25), transparent 35%);

/* Glassmorphism con blur */
backdrop-filter: blur(var(--zen-glass-blur));

/* Espaciado consistente */
padding: var(--zen-space-6);
margin: var(--zen-space-8);
```

### ❌ INCORRECTO

```css
/* Sombras negras puras */
box-shadow: 0 4px 10px rgba(0,0,0,0.5);  /* ¡NO! */

/* Bordes completamente cuadrados */
border-radius: 0;  /* ¡NO! */

/* Transiciones instantáneas */
transition: none;  /* ¡NO! */

/* Fondos planos sin profundidad */
background: #fff;  /* ¡NO! */

/* Contrastes agresivos */
color: #000;  /* ¡NO! */

/* Espaciado inconsistente */
padding: 13px;  /* ¡NO! Usar múltiplos de 4 */
```

---

## 🧩 Componentes Previstos

El sistema Zen Garden está diseñado para aplicarse a los siguientes componentes (en fases futuras):

### Componentes Base
- **Botones** — Con radios generosos y sombras suaves
- **Tarjetas** — Glassmorphism con bordes sutiles
- **Inputs** — Bordes redondeados, estados focus suaves
- **Badges** — Pequeños elementos con color primario

### Componentes de Layout
- **Header** — Sticky con glassmorphism
- **Footer** — Fondo oscuro con jerarquía tipográfica
- **Hero** — Gradientes radiales, orbs decorativos
- **Secciones** — Contenedores con overflow hidden para decoraciones

### Componentes de Navegación
- **Menús** — Transiciones suaves, estados hover sutiles
- **Tabs** — Indicadores animados con easing personalizado
- **Breadcrumbs** — Tipografía secundaria, separadores sutiles

### Componentes de Contenido
- **Testimonios** — Tarjetas con glassmorphism
- **Precios** — Cards destacadas con sombras elevadas
- **FAQ** — Acordeones con transiciones suaves

---

## 🏆 Mejores Prácticas

### 1. Consistencia Visual

- Usa siempre las variables del sistema (`--zen-*`)
- Nunca inventes nuevos colores o valores
- Mantén el espaciado en múltiplos de 4px

### 2. Profundidad Sutil

- Combina sombras suaves con elevación en hover
- Usa glassmorphism para capas superpuestas
- Añade gradientes radiales para profundidad de fondo

### 3. Movimiento Orgánico

- Todas las transiciones deben usar `ease`
- Las animaciones deben ser lentas y calmadas
- El hover debe elevar elementos, no cambiar colores drásticamente

### 4. Espacio Negativo

- No temas el espacio vacío
- Usa `--zen-space-*` generosamente
- El contenido debe "respirar"

### 5. Accesibilidad

- Mantén contraste suficiente para texto (mínimo 4.5:1)
- No dependas solo del color para información
- Asegura que las animaciones no causen mareo

### 6. Rendimiento

- Usa `transform` y `opacity` para animaciones (GPU-accelerated)
- Limita el uso de `backdrop-filter` en elementos múltiples
- Optimiza imágenes y assets decorativos

---

## 📋 Checklist de Implementación

Antes de aplicar el diseño Zen Garden a un componente:

- [ ] ¿Usa las variables de color `--zen-*`?
- [ ] ¿Los bordes son redondeados (`--zen-radius-*`)?
- [ ] ¿Las sombras son suaves y del color base?
- [ ] ¿Las transiciones usan `--zen-transition-*`?
- [ ] ¿El espaciado usa `--zen-space-*`?
- [ ] ¿Hay suficiente contraste para accesibilidad?
- [ ] ¿Las animaciones son calmadas (< 1s)?
- [ ] ¿Se evita negro/blanco puros?

---

## 🔗 Recursos

- **Archivo CSS**: `src/index.css`
- **Variables CSS**: Todas definidas en `:root`
- **Clases utilitarias**: En `@layer utilities`
- **Animaciones**: Keyframes definidos en `@layer utilities`

---

> *"En el jardín zen, menos es más. Cada elemento tiene propósito. El vacío no es ausencia — es presencia consciente."*
>
> — Filosofía Zen Garden

---

**Documento creado**: Fase 1 — Design System
**Última actualización**: 2026
**Mantenimiento**: Equipo de desarrollo meditation-site