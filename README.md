# Bloodborne: La Cacería Eterna 🩸

Página tributo interactiva dedicada a **Bloodborne**, el aclamado juego de acción de FromSoftware. Una experiencia web inmersiva que combina HTML5 semántico, CSS3 moderno y animaciones atmosféricas.

## 📋 Características

- ✅ **Estructura Semántica HTML5**: Uso correcto de `<header>`, `<section>`, `<article>`, `<footer>`
- ✅ **CSS3 Moderno**: Flexbox, Grid, variables CSS, animaciones fluidas
- ✅ **Diseño Responsivo**: Funciona perfectamente en móvil, tablet y desktop
- ✅ **Accesibilidad WCAG AA**: Contraste de colores, enfoques visibles, navegación por teclado
- ✅ **Efecto Atmosférico**: Sistema de niebla volumétrica con parallax
- ✅ **Galería Interactiva**: 12+ tarjetas de personajes y jefes con links a YouTube
- ✅ **Tipografía Premium**: Google Fonts (Cinzel Decorative + Crimson Text)
- ✅ **Performance**: Carga lazy de imágenes, animaciones optimizadas

## 🎮 Secciones

1. **Hero Section** - Introducción épica con Call-to-Action
2. **Cazadores de la Noche** - Personajes principales y aliados
3. **Bestias de la Noche** - Jefes y criaturas del juego
4. **Lore** - Cita atmosférica sobre el universo
5. **Footer** - Información y créditos

## 🛠 Tecnologías

- **HTML5** - Etiquetas semánticas
- **CSS3** - Variables, Flexbox, Grid, Animations
- **Bootstrap 5** - Sistema de grid responsivo
- **Google Fonts** - Tipografía personalizada
- **Vanilla JavaScript** - Intersection Observer para scroll reveal

## 📦 Instalación

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor (funciona con `file://`)

### Opción 1: Archivo local
```bash
# Descarga los archivos
cd "tu_carpeta_del_proyecto"

# Abre en tu navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opción 2: Servidor local (recomendado)
```python
# Con Python 3
cd "tu_carpeta_del_proyecto"
python -m http.server 8000

# Abre http://localhost:8000 en tu navegador
```

## 📁 Estructura del Proyecto

```
Pagina Bloodbourne/
├── index.html          # Página principal con estructura HTML5 semántica
├── estilos.css         # Estilos CSS3 con variables y responsive design
├── README.md           # Este archivo
└── assets/             # (Opcional) Para imágenes locales futuras
```

## 🎨 Personalización

### Editar texto
Abre `index.html` y modifica las etiquetas `<h1>`, `<p>`, `<h3>`, etc.

### Cambiar colores
En `estilos.css`, modifica las variables `:root`:
```css
:root {
    --color-fondo: #0D0D0D;      /* Fondo oscuro */
    --color-acento: #8C1C1C;     /* Rojo sangre */
    --color-texto: #D9D9D9;      /* Texto claro */
    --color-hueso: #C4B998;      /* Acentos claros */
}
```

### Agregar nuevas tarjetas
En `index.html`, duplica una `<article class="tarjeta">` y actualiza:
- Imagen `src`
- Tipo (span)
- Nombre (h3)
- Descripción (p)
- Link YouTube (`href`)

## ♿ Accesibilidad

- ✅ Contraste WCAG AA cumplido (>7:1 en botones, >12:1 en texto)
- ✅ Enfoques visibles (`:focus`) en todos los elementos interactivos
- ✅ Navegación completa por teclado (Tab + Enter)
- ✅ Imágenes con `alt` descriptivos
- ✅ Estructura de headings lógica (h1 → h2 → h3)

## 📱 Responsive Design

```css
/* Mobile-first approach */
- < 768px: Columna única
- 768px - 1024px: 2 columnas (tablet)
- > 1024px: 3-4 columnas (desktop)
```

## 🔄 Control de Versiones

### Commits Semánticos
```bash
# Características nuevas
git commit -m "feat: agregar tarjeta de Presencia Lunar"

# Correcciones
git commit -m "fix: mejorar contraste WCAG en botones"

# Estilos
git commit -m "style: aumentar espaciado del botón hero"

# Documentación
git commit -m "docs: actualizar README con instrucciones"

# Refactoring
git commit -m "refactor: consolidar variables CSS"
```

### Workflow recomendado
```bash
# 1. Crear rama para nueva funcionalidad
git checkout -b feat/nueva-seccion

# 2. Realizar cambios
# ... edita archivos ...

# 3. Commitear cambios
git add .
git commit -m "feat: agregar nueva sección"

# 4. Subir a GitHub
git push origin feat/nueva-seccion

# 5. Crear Pull Request en GitHub
# Luego fusionar a main

# 6. Actualizar rama local
git checkout main
git pull origin main
```

### Respaldo en la nube
```bash
# Crear commits periódicos (después de cada cambio importante)
git commit -m "descripción del cambio"

# Subir a GitHub
git push origin main

# Verificar estado
git status
git log --oneline -5
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama (`git checkout -b mejora/descripcion`)
3. Commit cambios (`git commit -m "tipo: descripción"`)
4. Push a la rama (`git push origin mejora/descripcion`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto es un tributo educativo sin fines comerciales a **Bloodborne** © FromSoftware.

Página desarrollada con fines académicos para demostrar:
- HTML5 semántico
- CSS3 moderno
- Responsive design
- Accesibilidad WCAG AA
- Control de versiones Git

## 📞 Información

- **Juego Original**: Bloodborne (FromSoftware, 2015)
- **Plataforma**: PlayStation 4 / PlayStation 5
- **Desarrollador página**: Proyecto educativo

---

**Que la buena sangre guíe tu camino.** 🩸🌙

Última actualización: Marzo 2026
