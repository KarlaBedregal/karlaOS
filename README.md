# KarlaOS 🚀

Sistema Operativo Personal - Portafolio Interactivo

## 🎨 Características

- ✨ **Boot Sequence**: Animación de inicio tipo terminal
- 🖥️ **Desktop Interactivo**: Iconos con tooltips y efectos hover
- 🪟 **Sistema de Ventanas**: Ventanas ARRASTRABLES con glassmorphism
- 🎯 **7 Secciones**:
  - `Proyectos.exe`: HuellitasAI, Lung Track, Yachai
  - `Bio_Humana.txt`: Terminal interactiva con tu historia
  - `Hobbies.collection`: Tus pasatiempos con galería visual (NUEVO!)
  - `Dreams.manifest`: Metas y sueños con roadmap (NUEVO!)
  - `Certificados.zip`: Galería de logros
  - `IEEE_WIE.log`: Timeline de liderazgo
  - `Terminal.app`: Terminal funcional con 15+ comandos
- 📊 **System Status Widget**: Monitoreo en tiempo real (ahora abajo a la derecha)
- ⚡ **Easter Egg MEJORADO**: 5 temas de colores diferentes!
  - 🔵 Cyber Blue (predeterminado)
  - 💗 IEEE WIE Pink
  - 💜 Dream Purple
  - 💚 Hacker Green
  - 🧡 Sunset Orange
- 🎭 **Animaciones**: Partículas de fondo y transiciones suaves
- 📱 **Responsive**: Adaptado para móviles y tablets
- 🖱️ **Ventanas Arrastrables**: ¡Ahora puedes mover las ventanas libremente!

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones profesionales
- **Lucide React** - Iconos modernos
- **React Draggable** - Ventanas arrastrables

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
presentacion/
├── src/
│   ├── components/
│   │   ├── BootSequence.jsx      # Pantalla de carga
│   │   ├── Desktop.jsx            # Escritorio con iconos
│   │   ├── Window.jsx             # Sistema de ventanas
│   │   ├── ProjectsWindow.jsx     # Ventana de proyectos
│   │   ├── BioWindow.jsx          # Bio en terminal
│   │   ├── HobbiesWindow.jsx      # Hobbies con galería (NUEVO)
│   │   ├── DreamsWindow.jsx       # Sueños y metas (NUEVO)
│   │   ├── CertificatesWindow.jsx # Certificados
│   │   ├── IEEEWindow.jsx         # Historia IEEE WIE
│   │   ├── TerminalWindow.jsx     # Terminal funcional (15+ comandos)
│   │   ├── Taskbar.jsx            # Barra de tareas
│   │   ├── SystemStatus.jsx       # Widget de estado
│   │   └── ParticleBackground.jsx # Fondo animado
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎮 Comandos de Terminal

Dentro de `Terminal.app` puedes usar:

- `help` - Ver todos los comandos disponibles
- `about` - Información completa sobre Karla
- `skills` - Habilidades técnicas y soft skills
- `contact` - Información de contacto completa
- `projects` - Resumen detallado de proyectos
- `hobbies` - Pasatiempos y aficiones
- `dreams` - Metas y sueños con roadmap
- `ieee` - Historia en IEEE WIE
- `coffee` - Nivel actual de café (aleatorio)
- `music` - Playlist de coding favorita
- `books` - Libros que estás leyendo
- `fun` - Dato curioso aleatorio
- `matrix` - Sorpresa especial en código binario
- `quote` - Cita motivacional aleatoria
- `easter` - Pista del easter egg
- `clear` - Limpiar terminal

## 🎨 Personalización

### Colores del Tema

En `tailwind.config.js`:
- `karla-dark`: Fondo principal
- `karla-acciclar entre 5 temas de colores:
- **Cyber Blue** → Tecnología y futuro
- **IEEE WIE Pink** → Liderazgo femenino
- **Dream Purple** → Creatividad y sueños
- **Hacker Green** → Código y terminal (agarra la barra de título)
- El sistema respeta los límites del viewport
- Animaciones optimizadas con Framer Motion
- Glassmorphism con backdrop-filter
- Scrollbar personalizado
- Z-index dinámico para ventanas
- Sistema de temas con 5 colores diferentes
- Terminal con 15+ comandos interactivos
- SystemStatus posicionado abajo a la derecha (no tapa la terminal)

## 🌟 Próximas Mejoras

- [ ] Guardar posición de ventanas en localStorage
- [ ] Guardar tema seleccionado en localStorage
- [ ] Minimizar ventanas a la barra de tareas
- [ ] Sonidos de sistema
- [ ] Integración con APIs reales
- [ ] Galería de fotos reales en Hobbies
- [ ] Modo claro adicional
- Las ventanas son totalmente arrastrables
- El sistema respeta los límites del viewport
- Animaciones optimizadas con Framer Motion
- Glassmorphism con backdrop-filter
- Scrollbar personalizado
- Z-index dinámico para ventanas

## 🌟 Próximas Mejoras

- [ ] Guardar posición de ventanas en localStorage
- [ ] Más comandos en la terminal
- [ ] Sonidos de sistema
- [ ] Modo claro/oscuro adicional
- [ ] Integración con APIs reales

## 👩‍💻 Autor

**Karla** - Estudiante de Ing. Sistemas + Administración

*"Code with purpose, lead with heart"*

---

¡Disfruta explorando KarlaOS! 🎉
