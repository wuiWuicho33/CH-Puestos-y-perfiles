/* # Tabla editable
---------------------------------------------- */

const table_editbtn = document.getElementById("table_editbtn");
const table_savebtn = document.getElementById("table_savebtn");
const table_cancelbtn = document.getElementById("table_cancelbtn");

const fila = document.querySelector("#tablaEditable tbody tr");
let valoresOriginales = [];

table_editbtn.addEventListener("click", () => {
  valoresOriginales = [];

  [...fila.cells].forEach((celda) => {
    const input = celda.querySelector("input, select, textarea");
    if (input) {
      valoresOriginales.push(input.value);
      input.disabled = false;
    }
  });

  table_editbtn.style.display = "none";
  table_savebtn.style.display = "inline-block";
  table_cancelbtn.style.display = "inline-block";
});

table_cancelbtn.addEventListener("click", () => {
  [...fila.cells].forEach((celda, i) => {
    const input = celda.querySelector("input, select, textarea");
    if (input) {
      input.value = valoresOriginales[i];
      input.disabled = true;
    }
  });

  table_editbtn.style.display = "inline-block";
  table_savebtn.style.display = "none";
  table_cancelbtn.style.display = "none";
});

table_savebtn.addEventListener("click", () => {
  [...fila.cells].forEach((celda) => {
    const input = celda.querySelector("input, select, textarea");
    if (input) {
      input.disabled = true;
    }
  });

  table_editbtn.style.display = "inline-block";
  table_savebtn.style.display = "none";
  table_cancelbtn.style.display = "none";
});
