/*=========
LAYOUT
=========*/
/* # Sidebar_layout
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.querySelector('.menu-toggle');
	const sidebar = document.querySelector('.sidebar');
	const main = document.querySelector('.main');

	function updateSidebar() {
		if (window.innerWidth <= 767) {
			// Ajustar para móviles
			sidebar.classList.remove('visible');
			main.classList.remove('shifted');
		} else {
			// Ajustar para escritorio
			sidebar.classList.add('visible');
			main.classList.add('shifted');
		}
	}

	menuToggle.addEventListener('click', function() {
		// Alternar visibilidad del sidebar
		sidebar.classList.toggle('visible');
		main.classList.toggle('shifted');
	});

	// Inicializar estado del sidebar
	updateSidebar();

	// Actualizar en redimensionamiento
	window.addEventListener('resize', updateSidebar);
});
  
/* # Side_menu
---------------------------------------------- */
$('.sub-menu ul').hide(); // Esconde todos los submenús al cargar la página

$(".sub-menu > a").click(function (event) {
	event.preventDefault(); // Evita que el enlace navegue

	const $subMenu = $(this).parent(".sub-menu").children("ul");

	// Cierra otros submenús
	$('.sub-menu ul').slideUp(100); // Aumentar a 100ms
	$('.sub-menu').removeClass('active-ddn');

	// Alterna el submenú actual
	if ($subMenu.is(':visible')) {
		$subMenu.slideUp(100); // Aumentar a 100ms
	} else {
		$subMenu.slideDown(100); // Aumentar a 100ms
		$(this).parent().addClass('active-ddn');
	}
});

/*=========
COMPONENTES
=========*/
/* # Tabs
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tabs-container');

    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-button');
        const tabPanes = container.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons and panes within this container
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add 'active' class to the clicked button and corresponding pane
                button.classList.add('active');
                const targetId = button.dataset.target;
                document.getElementById(targetId).classList.add('active');
            });
        });
    });
});

  /* # Modal
---------------------------------------------- */
// Obtener el modal y el botón de cierre
var modal = document.getElementById('modal');
var closeButton = document.querySelector('.close');
// Función para abrir el modal
function openModal() {
  modal.style.display = "block";
}
// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
}
// Event listener para cerrar el modal cuando se hace clic en el botón de cierre
closeButton.addEventListener('click', closeModal);

// Event listener para cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
// Manejar clic enlaces para abrir el modal
var openModalLinks = document.querySelectorAll('.openModal');
openModalLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    openModal();
  });
});

/* # Switches
---------------------------------------------- */
// Función para actualizar el texto del label basado en el estado del switch
function updateLabels() {
	const switches = document.querySelectorAll('.switch-input');
	switches.forEach(switchElement => {
		const labelElement = switchElement.parentElement.previousElementSibling;
		if (labelElement) {
			switchElement.addEventListener('change', function() {
				labelElement.textContent = this.checked ? getCheckedText(this) : getUncheckedText(this);
			});
		}
	});
  }
  // Obtiene el texto para el estado checked
  function getCheckedText(element) {
	if (element.classList.contains('state-switch-note')) {
		return element.parentElement.previousElementSibling.textContent === 'Inactivo' ? 'Activo' : 'Sí';
	}
	return 'Si';
  }
  // Obtiene el texto para el estado unchecked
  function getUncheckedText(element) {
	if (element.classList.contains('state-switch-note')) {
		return element.parentElement.previousElementSibling.textContent === 'Activo' ? 'Inactivo' : 'No';
	}
	return 'No';
  }
  
  // Inicializa la funcionalidad de los interruptores
  updateLabels();

/* # Form
---------------------------------------------- */
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
	if (!formulario.checkValidity()) {
		alert('Por favor, selecciona una opción.');
		event.preventDefault(); // Evita que el formulario se envíe
	}
});

/* # Alert
---------------------------------------------- */
function closeAlert(button) {
	const alert = button.parentElement; // Selecciona el contenedor de alerta
	alert.classList.add('hide');
  
	// Esperar a que termine la transición antes de eliminar el elemento
	setTimeout(() => {
	  alert.style.display = 'none';
	}, 500);
  }



  
