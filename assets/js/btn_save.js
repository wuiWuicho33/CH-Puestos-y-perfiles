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

/* # Save and Go
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const saveAndGoLinks = document.querySelectorAll('.save-and-go');

  saveAndGoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const currentPane = link.closest('.tab-pane');
      const currentForm = currentPane.querySelector('form');

      if (currentForm.checkValidity()) {
        e.preventDefault(); // Detiene el enlace temporalmente

        // Aquí podrías guardar datos vía fetch o similar
        console.log('Guardando datos antes de salir...');

        // Simula guardado asíncrono (puedes quitar el setTimeout y usar fetch)
        setTimeout(() => {
          window.location.href = link.getAttribute('href');
        }, 300); // espera opcional para guardar
      } else {
        e.preventDefault(); // Evita irse si no es válido
        currentForm.reportValidity(); // Muestra errores
      }
    });
  });
});