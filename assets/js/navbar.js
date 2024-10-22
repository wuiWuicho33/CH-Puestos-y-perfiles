/*=======
Navbar
=======*/
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');
  const body = document.body;
  let isMobile = window.innerWidth < 1024;

  // Cierra todos los menús desplegables
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.active').forEach(dropdown => {
      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
  }

  // Alterna la visibilidad del menú desplegable
  function toggleDropdown(dropdownToggle) {
    const dropdown = dropdownToggle.parentElement;
    const isActive = dropdown.classList.contains('active');

    closeAllDropdowns();

    if (!isActive) {
      dropdown.classList.add('active');
      dropdown.querySelector('.dropdown-menu').style.display = 'block';
    } else {
      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    }
  }

  // Maneja el cambio de tamaño de la ventana
  function handleResize() {
    const isCurrentlyMobile = window.innerWidth < 1024;

    if (isCurrentlyMobile !== isMobile) {
      if (!isCurrentlyMobile) {
        // Cambiando a vista de escritorio
        closeAllDropdowns(); 
        body.classList.remove('no-scroll'); 
      } else {
        // Cambiando a vista móvil
        closeAllDropdowns(); 
        body.classList.remove('no-scroll'); 
      }
      isMobile = isCurrentlyMobile;
    }
  }

  // Clic en dispositivos móviles
  navbarToggler.addEventListener('click', () => {
    if (isMobile) {
      navbarMenu.classList.toggle('active');
      body.classList.toggle('no-scroll', navbarMenu.classList.contains('active'));
    }
  });

  // Gestionar los menús desplegables
  document.addEventListener('click', event => {
    if (isMobile) {
      if (event.target.matches('.navbar-toggler')) {
        return; // Manejado por el clic en el botón de alternancia
      } else if (event.target.matches('.dropdown-toggle') || event.target.closest('.dropdown-toggle')) {
        event.preventDefault();
        toggleDropdown(event.target.closest('.dropdown-toggle'));
      } else if (!event.target.closest('.dropdown')) {
        closeAllDropdowns();
      }
    }
  });

  // Maneja el redimensionamiento de la ventana
  window.addEventListener('resize', handleResize);
});