# almawolflab-web

**https://gabriel-almawolf.github.io/almawolflab-web/**

Mockups HTML del sitio WordPress de [AlmaWolf Lab](https://almawolf.com/lab/). Cada versión es un snapshot publicado en GitHub Pages.

## Estructura

```
almawolflab-web/
├── index.html          # Índice de versiones
├── robots.txt
└── vN/
    ├── index.html      # Landing AlmaWolf Lab (acceso público)
    ├── Logo-AlmawolfLab.svg
    ├── web-review-mode.js
    ├── assets/         # Imágenes compartidas (equipo, QRs)
    └── her/
        └── index.html  # Proyecto HER — presentación v5 en scroll vertical
```

## Versiones

| Versión | Contenido | URL |
|---------|-----------|-----|
| [v1](v1/) | Landing + Proyecto HER (conversión v5 a scroll vertical) | `/v1/` |

## Acceso

- **Landing** (`/vN/`): pública.
- **Proyectos** (`/vN/her/`, etc.): protegidos con contraseña por sesión (`sessionStorage`).

## Sistema de comentarios

`web-review-mode.js` en cada versión. Activa con `⌥ + C`. Envía comentarios a Google Sheets vía Apps Script.

## Cómo publicar una nueva versión

1. Copiar la carpeta de la versión anterior: `cp -r v1 v2`
2. Aplicar cambios en `v2/`
3. Añadir la entrada en el `index.html` raíz
4. Commit y push a `main` — GitHub Pages publica automáticamente
