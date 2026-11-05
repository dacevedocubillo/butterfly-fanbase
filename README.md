# Butterfly Fanbase

Sitio independiente de una fanbase de BTS en Costa Rica. React, JavaScript, CSS y Vite.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
```

## Publicación

GitHub Actions compila y publica automáticamente cada cambio en `main`.
Sitio: https://dacevedocubillo.github.io/butterfly-fanbase/

La navegación por hash permite abrir las cinco páginas directamente en GitHub Pages sin un servidor adicional:
`#inicio`, `#noticias`, `#votaciones`, `#guias`, `#agenda`.

## Contenido

Editar `src/data/content.js`. Las noticias deben incluir fecha, categoría y fuente.
Las votaciones necesitan fecha de cierre ISO con zona horaria; se ocultan al vencer.
Los eventos necesitan fecha, categoría y fuente; las horas deben expresarse en horario de Costa Rica.

No se inventan convocatorias ni eventos. Los estados vacíos significan que no hay entradas publicadas en este sitio.
El calendario es navegable y permite filtrar por tipo y fecha; no se sincroniza con servicios externos.
Los artículos, mensajes y fechas se actualizan editando los datos, no automáticamente.

Las cuatro redes proporcionadas por la fanbase aparecen en el pie de todas las páginas.
La integración de charts/streams está pospuesta y no está implementada.
