# Auditoría de UX/UI y Rediseño

**Proyecto auditado:** Gestor de Notas Académicas (`app-notas`)  
**Estudiante:** Henry Jesús Mendoza Vargas  

---

## 1. Auditoría con las 5 Heurísticas de Nielsen

| Heurística | Problema identificado en la interfaz original | Solución de rediseño aplicada |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o borrar una nota, la pantalla no daba confirmación visual ni retroalimentación. | Se agregó un mensaje de estado visible (`role="status"`) que confirma acciones ("Nota agregada correctamente"). |
| **Coincidencia con el mundo real** | Los botones e instrucciones usaban términos técnicos como `SUBMIT_DATA` o `CLEAR_ALL`. | Se cambió el lenguaje a términos cotidianos del usuario: "Guardar nota" y "Limpiar". |
| **Control y libertad** | Al borrar una nota o limpiar el formulario, la acción era irreversible e inmediata. | Se incorporó una ventana de confirmación (`confirm`) para permitir cancelar acciones destructivas. |
| **Prevención de errores** | Permitía guardar notas vacías o con espacios en blanco, generando registros nulos. | Se agregaron los atributos `required` e `invalid`, deshabilitando el envío de campos vacíos. |
| **Reconocer, no recordar** | Los campos solo dependían de *placeholders* que desaparecían al escribir. | Se implementaron etiquetas `<label>` permanentes en todos los campos de entrada. |

---

## 2. Aplicación de Leyes de Usabilidad

* **Ley de Fitts:** El botón principal ("Guardar nota") se diseñó con un área de clic amplia (altura mínima de `44px`) y un ancho flexible (`flex: 1`), separado estratégicamente del botón secundario para evitar pulsaciones accidentales.
* **Ley de Hick:** Se categorizaron y agruparon las prioridades y etiquetas de las notas en menús desplegables (`<select>` con grupos), reduciendo la carga de decisión del usuario.
* **Ley de Miller:** El formulario se estructuró en 2 bloques lógicos numerados ("1. Contenido de la nota" y "2. Categoría y Prioridad"), limitando los elementos visibles para no saturar la memoria a corto plazo.

---

## 3. Principios Visuales y Accesibilidad

* **Jerarquía visual:** Título principal `<h1>` de 28px, etiquetas en negrita y botón primario con color de acción destacado sobre el secundario.
* **Contraste de color:** Cumple la norma WCAG 2.2 AA con un contraste superior a **4.5:1** (texto `#1f2933` sobre fondo blanco `#ffffff`).
* **Foco visible:** Navegación por teclado garantizada usando `:focus-visible` con borde resaltado de 3px en color naranja (`#f59e0b`).
* **Soporte de lectores de pantalla:** Todos los campos tienen sus `<label for="...">` enlazados mediante `id`, e imágenes con texto alternativo `alt`.

---

## 4. Resultados en Lighthouse

| Métrica | Antes del rediseño | Después del rediseño |
| :--- | :---: | :---: |
| **Accesibilidad** | 68 / 100 | **100 / 100** |
| **Mejores Prácticas** | 75 / 100 | **100 / 100** |