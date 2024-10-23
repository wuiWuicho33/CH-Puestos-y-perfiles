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

/* # Pagination
---------------------------------------------- */
// Define el total de páginas (esto se puede actualizar dinámicamente)
const totalPages = 100;

// Actualiza el total de páginas en el componente
document.getElementById('totalPages').textContent = `de ${totalPages}`;

const pageInput = document.getElementById('pageNumber');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');

let currentPage = 1;

function updatePage(newPage) {
	if (newPage < 1 || newPage > totalPages) return;

	currentPage = newPage;
	pageInput.value = currentPage;
	// Aquí puedes agregar lógica para actualizar el contenido según la página actual
}

prevButton.addEventListener('click', () => {
  updatePage(currentPage - 1);
});

nextButton.addEventListener('click', () => {
  updatePage(currentPage + 1);
});

pageInput.addEventListener('change', () => {
	const newPage = parseInt(pageInput.value, 10);
	updatePage(newPage);
});


/*Form*/
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
	if (!formulario.checkValidity()) {
		alert('Por favor, selecciona una opción.');
		event.preventDefault(); // Evita que el formulario se envíe
	}
});