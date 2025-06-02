/* # Save and Next
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const saveAndNextBtn = document.getElementById('save-and-next');
  const formTab1 = document.querySelector('#tab-01 form');

  if (saveAndNextBtn && formTab1) {
    saveAndNextBtn.addEventListener('click', () => {
      if (formTab1.checkValidity()) {
        // Guardado simulado
        console.log('Formulario válido. Guardando...');

        // Buscar el botón de tab actual
        const currentTabButton = document.querySelector('.tab-button.active');
        const allTabButtons = Array.from(document.querySelectorAll('.tab-button'));
        const currentIndex = allTabButtons.indexOf(currentTabButton);

        // Avanzar al siguiente tab si existe
        const nextTabButton = allTabButtons[currentIndex + 1];
        if (nextTabButton) {
          nextTabButton.click();
        }
      } else {
        formTab1.reportValidity();
      }
    });
  }
});
