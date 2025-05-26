const form = document.getElementById("Form-01");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const toggleFields = (enable) => {
  const elements = form.querySelectorAll("input, select, textarea, fieldset");
  elements.forEach(el => {
    el.disabled = !enable;
  });
};

const resetForm = () => {
  toggleFields(false);
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
  editBtn.style.display = "inline";
};

editBtn.addEventListener("click", () => {
  toggleFields(true);
  editBtn.style.display = "none";
  saveBtn.style.display = "inline";
  cancelBtn.style.display = "inline";
});

saveBtn.addEventListener("click", () => {
  // Para agregar validaciones o envío de datos
  resetForm();
});

cancelBtn.addEventListener("click", () => {
  // Para restaurar valores originales
  resetForm();
});
