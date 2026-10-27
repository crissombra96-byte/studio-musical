# Memoria de actualización v28 — Estudio Musical

Cache del service worker: `estudio-v28`. Base de datos IndexedDB: versión 5 (nuevo store `eventos`).

## Cambios

1. **Organizar**: se quitó la sección "Obras". Queda una sola vista con carpetas desplegables (▸/▾). Cada obra aparece dentro de su carpeta de origen, con botones de días de estudio (igual que antes) y botones de importancia para la semana: alta / media / baja. La importancia semanal se guarda en `o.sp = {k: lunes, v: nivel}` y se reinicia sola cada lunes (vuelve a `prioridad`). Las carpetas abiertas se recuerdan (`fop`). Se mantienen buscar, ordenar, importar, nueva obra, abrir/cerrar todas y seleccionar/mover.
2. **Metrónomo**: los campos numéricos (compás desde/hasta, tope, comp. por pantalla, BPM) ya no abren el teclado del sistema: son de solo lectura con botones − / + (mantener apretado repite).
3. **Repertorios (listas de banda)**: al entrar se ve una barra fija arriba con `‹ Volver`, el título, la cantidad de obras y el próximo evento, y `Editar`. Las pestañas de abajo quedan visibles. El botón atrás de Android cierra la lista.
4. **Pantalla completa**: se agregó `manifest.json` con `display: fullscreen`. Para que aplique hay que desinstalar y volver a instalar la app en Android. El aviso del sistema ("para salir de la pantalla completa…") lo muestra Android y la web no lo puede suprimir del todo.
5. **Agenda**: nuevo tipo de evento: Ensayo, Show o Recordatorio, con hora, lugar y notas opcionales, repertorio vinculado (no aplica a recordatorio) y repetición semanal. "Próximamente" y la grilla semanal muestran los eventos; "Hoy" también. La pestaña de listas pasó a llamarse **Repertorios** y ya no tiene fecha. Las listas viejas con fecha se convierten solas en eventos tipo Show (probado desde v27).
6. El respaldo `.estudio` (versión 7) ahora incluye los eventos.

## Pruebas
Playwright con pdf.js real a 1280x800 y 360x740: migración, acordeón, importancia, selección y mover, eventos de los 3 tipos, repetición semanal, respaldo, metrónomo, repetición por compás, papelera. Sin errores de página.

## Sin comprobar en tablet real
Pantalla completa al abrir (requiere reinstalar), ausencia del teclado en Android, comportamiento del botón atrás con la lista abierta. Los recordatorios son solo dentro de la app (sin notificaciones push).

## Archivos a subir a GitHub
`index.html`, `sw.js`, `manifest.json` (reemplaza al anterior).
