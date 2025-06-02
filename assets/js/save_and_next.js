/* # Save and Next
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const saveButtons = document.querySelectorAll('.save-and-next');

  saveButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentPane = button.closest('.tab-pane');
      const currentForm = currentPane.querySelector('form');

      if (currentForm.checkValidity()) {
        // Simula guardado
        console.log('Formulario válido. Guardando datos de:', currentPane.id);

        // Encuentra el tab-button activo actual
        const currentTabButton = document.querySelector(`.tab-button[data-target="${currentPane.id}"]`);
        const allTabButtons = Array.from(document.querySelectorAll('.tab-button'));
        const currentIndex = allTabButtons.indexOf(currentTabButton);

        // Avanza al siguiente tab si existe
        const nextTabButton = allTabButtons[currentIndex + 1];
        if (nextTabButton) {
          nextTabButton.click();
        }
      } else {
        currentForm.reportValidity(); // Muestra errores del navegador
      }
    });
  });
});