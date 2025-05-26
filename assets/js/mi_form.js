const form = document.getElementById("miFormulario");
const editarBtn = document.getElementById("editarBtn");
const guardarBtn = document.getElementById("guardarBtn");
const cancelarBtn = document.getElementById("cancelarBtn");

const habilitarCampos = (habilitar) => {
  // Selecciona inputs, selects, textareas y fieldsets dentro del form
  const elementos = form.querySelectorAll("input, select, textarea, fieldset");
  elementos.forEach(el => {
    // El fieldset tiene su propia propiedad disabled que afecta a todos sus hijos
    el.disabled = !habilitar;
  });
};

editarBtn.addEventListener("click", () => {
  habilitarCampos(true);
  editarBtn.style.display = "none";
  guardarBtn.style.display = "inline";
  cancelarBtn.style.display = "inline";
});

const restaurarFormulario = () => {
  habilitarCampos(false);
  guardarBtn.style.display = "none";
  cancelarBtn.style.display = "none";
  editarBtn.style.display = "inline";
};

guardarBtn.addEventListener("click", () => {
  // Aquí podrías agregar validaciones o envío de datos
  restaurarFormulario();
});

cancelarBtn.addEventListener("click", () => {
  // Aquí podrías restaurar valores originales si quieres
  restaurarFormulario();
});
