/* # Tabla editable
---------------------------------------------- */

const btnEditar = document.getElementById("btnEditar");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");

const fila = document.querySelector("#tablaEditable tbody tr");
let valoresOriginales = [];

btnEditar.addEventListener("click", () => {
  valoresOriginales = [];

  [...fila.cells].forEach((celda) => {
    const input = celda.querySelector("input, select, textarea");
    if (input) {
      valoresOriginales.push(input.value);
      input.disabled = false;
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
