# Forrin · Bienestar y Salud Sexual

App web estática (sin login, sin build step) sobre bienestar y salud sexual, con:

- Chatbot / preguntas frecuentes basado en fuentes oficiales de argentina.gob.ar
- Información sobre métodos anticonceptivos
- Información sobre ITS y prevención (sífilis)
- Resumen de derechos y normativa vigente (Leyes 25.673, 26.130, 26.150, 27.610)
- Directorio de hospitales públicos para testeo

## Cómo correrlo localmente

No requiere instalación ni dependencias. Alcanza con abrir `index.html` en el navegador,
o servirlo con cualquier servidor estático, por ejemplo:

```bash
# Opción 1: Python
python3 -m http.server 8080

# Opción 2: Node (npx)
npx serve .
```

Luego abrí `http://localhost:8080`.

## Cómo subirlo a GitHub

```bash
git init
git add .
git commit -m "Primer commit: app Forrin"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

### Publicarlo gratis con GitHub Pages

1. En GitHub, andá a **Settings → Pages**.
2. En "Source" elegí la rama `main` y la carpeta `/ (root)`.
3. Guardá los cambios: en unos minutos la app va a estar disponible en
   `https://TU_USUARIO.github.io/TU_REPO/`.

## Estructura
