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