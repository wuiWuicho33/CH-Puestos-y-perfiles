/* # Button active
---------------------------------------------- */
function actualizarClasesBotones() {
  const headers = document.querySelectorAll('.acordeon-header');
  const todosSuccess = [...headers].every(header => header.classList.contains('success'));
  
  const btnRechazar = document.querySelector('button.btn-lighter-inverse');
  const btnAutorizar = document.querySelector('button.btn-lighter');

  if (todosSuccess) {
    btnRechazar?.classList.replace('btn-lighter-inverse', 'btn-dark-inverse');
    btnAutorizar?.classList.replace('btn-lighter', 'btn-dark');
  } else {
    btnRechazar?.classList.replace('btn-dark-inverse', 'btn-lighter-inverse');
    btnAutorizar?.classList.replace('btn-dark', 'btn-lighter');
  }
}

// Ejemplo: llamar esta función luego de abrir un tab en el acordeón
document.querySelectorAll('.acordeon-header').forEach(button => {
  button.addEventListener('click', () => {
    // Esperar a que el estado del acordeón se actualice
    setTimeout(actualizarClasesBotones, 50);
  });
});

