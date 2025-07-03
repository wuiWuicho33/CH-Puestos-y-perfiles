/* # Tabla editable
---------------------------------------------- */

document.querySelectorAll(".tabla-editable").forEach((contenedor) => {
  const tabla = contenedor.querySelector(".tablaEditable");
  const fila = tabla.querySelector("tbody tr"); // puedes expandir esto a múltiples filas si necesitas

  const btnEditar = contenedor.querySelector(".edit-btn");
  const btnCancelar = contenedor.querySelector(".cancel-btn");
  const btnGuardar = contenedor.querySelector(".save-btn");

  let valoresOriginales = [];

  btnEditar.addEventListener("click", () => {
    valoresOriginales = [];

    [...fila.cells].forEach((celda) => {
      const input = celda.querySelector("input, select, textarea");
      if (input) {
        valoresOriginales.push(input.value);
        input.disabled = false;
        if (input.tagName.toLowerCase() === "textarea") {
          input.scrollTop = 0;
        }
      }
    });

    btnEditar.style.display = "none";
    btnGuardar.style.display = "inline-block";
    btnCancelar.style.display = "inline-block";
  });

  btnCancelar.addEventListener("click", () => {
    [...fila.cells].forEach((celda, i) => {
      const input = celda.querySelector("input, select, textarea");
      if (input) {
        input.value = valoresOriginales[i];
        input.disabled = true;
      }
    });

    btnEditar.style.display = "inline-block";
    btnGuardar.style.display = "none";
    btnCancelar.style.display = "none";
  });

  btnGuardar.addEventListener("click", () => {
    [...fila.cells].forEach((celda) => {
      const input = celda.querySelector("input, select, textarea");
      if (input) {
        input.disabled = true;
      }
    });

    btnEditar.style.display = "inline-block";
    btnGuardar.style.display = "none";
    btnCancelar.style.display = "none";
  });
});
