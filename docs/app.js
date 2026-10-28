document.addEventListener("DOMContentLoaded", function () {
    const formNotas = document.getElementById("formNotas");
    const mensajeEstado = document.getElementById("mensajeEstado");
    const listaNotas = document.getElementById("listaNotas");
  
    function mostrarMensaje(texto, tipo) {
      mensajeEstado.textContent = texto;
      mensajeEstado.className = "mensaje " + tipo;
    }
  
    formNotas.addEventListener("submit", function (evento) {
      evento.preventDefault();
      formNotas.classList.add("validado");
  
      // Prevención de errores: verifica si hay campos incompletos
      if (!formNotas.checkValidity()) {
        mostrarMensaje("Por favor, completa todos los campos obligatorios.", "error");
        formNotas.querySelector("input:invalid, select:invalid, textarea:invalid").focus();
        return;
      }
  
      const titulo = document.getElementById("titulo").value.trim();
      const contenido = document.getElementById("contenido").value.trim();
      const categoria = document.getElementById("categoria").value;
      const prioridad = document.getElementById("prioridad").value;
  
      // Crear el elemento de la nota en el DOM
      const li = document.createElement("li");
      li.className = "item-nota";
      li.innerHTML = `
        <div>
          <h3>${titulo} <small>(${categoria} - Prioridad ${prioridad})</small></h3>
          <p>${contenido}</p>
        </div>
        <button type="button" class="btn-borrar" aria-label="Eliminar nota">Eliminar</button>
      `;
  
      // Asignar evento al botón de eliminar nota individual
      li.querySelector(".btn-borrar").addEventListener("click", function () {
        if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
          li.remove();
          mostrarMensaje("Nota eliminada correctamente.", "exito");
        }
      });
  
      listaNotas.appendChild(li);
  
      // Visibilidad del estado
      mostrarMensaje("¡Nota guardada con éxito!", "exito");
  
      // Limpiar formulario
      formNotas.reset();
      formNotas.classList.remove("validado");
    });
  
    // Control y libertad: Confirmación antes de limpiar los campos
    formNotas.addEventListener("reset", function (evento) {
      if (formNotas.querySelector("#titulo").value !== "" || formNotas.querySelector("#contenido").value !== "") {
        if (!confirm("¿Seguro que deseas limpiar todos los campos del formulario?")) {
          evento.preventDefault();
          return;
        }
      }
      formNotas.classList.remove("validado");
      mostrarMensaje("Formulario limpio.", "exito");
    });
  });