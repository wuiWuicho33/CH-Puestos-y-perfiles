/* # Tabla editable
---------------------------------------------- */

const tabla = document.getElementById("tablaEditable");
const btnEditar = document.getElementById("btnEditar");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");

let valoresOriginales = [];

btnEditar.addEventListener("click", () => {
  valoresOriginales = [];

  [...tabla.rows[1].cells].forEach((celda) => {
    valoresOriginales.push(celda.innerHTML);

    const tipo = celda.getAttribute("data-type");
    const valor = celda.innerText.trim();

    if (tipo === "input") {
      celda.innerHTML = `<input type="text" value="${valor}">`;
    } else if (tipo === "select") {
      celda.innerHTML = `
        <select>
          <option value="México" ${valor === "México" ? "selected" : ""}>México</option>
          <option value="Argentina" ${valor === "Argentina" ? "selected" : ""}>Argentina</option>
          <option value="Colombia" ${valor === "Colombia" ? "selected" : ""}>Colombia</option>
        </select>`;
    } else if (tipo === "textarea") {
      celda.innerHTML = `<textarea rows="2">${valor}</textarea>`;
    }
  });

  btnEditar.style.display = "none";
  btnGuardar.style.display = "inline-block";
  btnCancelar.style.display = "inline-block";
});

btnCancelar.addEventListener("click", () => {
  [...tabla.rows[1].cells].forEach((celda, i) => {
    celda.innerHTML = valoresOriginales[i];
  });

  btnEditar.style.display = "inline-block";
  btnGuardar.style.display = "none";
  btnCancelar.style.display = "none";
});

btnGuardar.addEventListener("click", () => {
  [...tabla.rows[1].cells].forEach((celda) => {
    const tipo = celda.getAttribute("data-type");

    if (tipo === "input") {
      celda.innerHTML = celda.querySelector("input").value;
    } else if (tipo === "select") {
      celda.innerHTML = celda.querySelector("select").value;
    } else if (tipo === "textarea") {
      celda.innerHTML = celda.querySelector("textarea").value;
    }
  });

  btnEditar.style.display = "inline-block";
  btnGuardar.style.display = "none";
  btnCancelar.style.display = "none";
});
