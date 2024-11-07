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
document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

document.querySelectorAll('[data-dismiss="modal"]').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal.id);
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
};

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

/* # NewItemInput
---------------------------------------------- */
// Función para mostrar el formulario de entrada específico
function mostrarInput(formId) {
    const newAreaItem = document.getElementById(`newAreaItem${formId}`);
    
    // Mostrar el div con el input y label
    newAreaItem.style.display = 'block';
    
    // Ocultar todos los botones de "Añadir un área"
    const botonesAdd = document.querySelectorAll('.btn-add-element');
    botonesAdd.forEach(boton => boton.style.display = 'none');
}

// Función para agregar el nuevo elemento (con ID específico)
function agregarElemento(formId) {
    const inputArea = document.getElementById(`area${formId}`);
    const areaValue = inputArea.value.trim();
    
    if (areaValue) {
        // Obtener el contenedor específico para este formulario
        const contenedor = document.getElementById(`areaItemContainer${formId}`);
        
        // Crear un nuevo contenedor para el label y el input
        const newAreaItemDiv = document.createElement('div');
        newAreaItemDiv.classList.add('elemento-agregado');
        
        // Crear el label
        const nuevoLabel = document.createElement('label');
        nuevoLabel.setAttribute('for', 'area');
        nuevoLabel.textContent = 'Área de expertiz';
        
        // Asignar las clases al nuevo label para que tenga el mismo estilo
        nuevoLabel.classList.add('label-area');
        
        // Crear el input con el valor ingresado
        const nuevoInput = document.createElement('input');
        nuevoInput.type = 'text';
        nuevoInput.value = areaValue; // Asignamos el texto ingresado por el usuario
        nuevoInput.setAttribute('placeholder', 'Agrega un área de expertiz');
        
        // Asignar las clases al nuevo input para que tenga el mismo estilo
        nuevoInput.classList.add('input-area');
        
        // Crear el ícono de basura
        const iconoBote = document.createElement('i');
        iconoBote.classList.add('fas', 'fa-trash', 'btn-trash'); // Usamos Font Awesome para el ícono
        
        // Añadir un evento para eliminar el elemento
        iconoBote.addEventListener('click', function() {
            contenedor.removeChild(newAreaItemDiv); // Elimina el contenedor del área
        });
        
        // Crear un contenedor para el input y el ícono de basura
        const inputContenedor = document.createElement('div');
        inputContenedor.classList.add('input-container');
        
        // Añadir el input y el ícono al contenedor
        inputContenedor.appendChild(nuevoInput);
        inputContenedor.appendChild(iconoBote);
        
        // Agregar el label y el contenedor del input al nuevo div
        newAreaItemDiv.appendChild(nuevoLabel);
        newAreaItemDiv.appendChild(inputContenedor);
        
        // Agregar el nuevo div al contenedor específico
        contenedor.appendChild(newAreaItemDiv);
        
        // Limpiar el input
        inputArea.value = '';
        
        // Regresar al estado inicial
        document.getElementById(`newAreaItem${formId}`).style.display = 'none';
        const botonesAdd = document.querySelectorAll('.btn-add-element');
        botonesAdd.forEach(boton => boton.style.display = 'inline-block');
    } else {
        alert("Por favor, ingresa un área de expertiz.");
    }
}

// Función para cancelar el formulario y regresar al estado inicial (con ID específico)
function cancelar(formId) {
    // Limpiar el input y regresar al estado inicial
    document.getElementById(`area${formId}`).value = '';
    document.getElementById(`newAreaItem${formId}`).style.display = 'none';
    const botonesAdd = document.querySelectorAll('.btn-add-element');
    botonesAdd.forEach(boton => boton.style.display = 'inline-block');
}




  
