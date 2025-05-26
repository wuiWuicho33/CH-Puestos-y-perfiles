document.querySelectorAll(".myForm").forEach(form => {
  const editBtn = form.querySelector(".editBtn");
  const saveBtn = form.querySelector(".saveBtn");
  const cancelBtn = form.querySelector(".cancelBtn");

  const toggleFields = (enable) => {
    form.querySelectorAll("input, select, textarea, fieldset").forEach(el => {
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
    // lógica de guardado
    resetForm();
  });

  cancelBtn.addEventListener("click", () => {
    // lógica de cancelación
    resetForm();
  });

  // Deshabilitar los campos al iniciar
  resetForm();
});
