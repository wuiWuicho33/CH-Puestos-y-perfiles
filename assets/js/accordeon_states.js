/* # Accordion states
---------------------------------------------- */
// Script para cambiar el estilo visual del acordeón solo una vez al abrirlo
document.querySelectorAll('.acordeon-header').forEach(button => {
  button.addEventListener('click', function () {
    // Esperar al estado final del acordeón (después del click)
    setTimeout(() => {
      // Si este botón se abrió y aún no se marcó como success
      if (this.classList.contains('open') && !this.classList.contains('success')) {
        // Cambiar la clase visual del botón
        this.classList.remove('warning', 'disable');
        this.classList.add('success');

        const span = this.querySelector('span');
        const iconInside = span?.querySelector('i');

        if (span) {
          span.classList.remove('label-warning', 'label-disable');
          span.classList.add('label-success');
        }

        if (iconInside) {
          iconInside.classList.remove('fa-exclamation');
          iconInside.classList.add('fa-check');
        }
      }
      // Si se vuelve a cerrar o abrir otro, no revertimos los cambios
    }, 10);
  });
});
