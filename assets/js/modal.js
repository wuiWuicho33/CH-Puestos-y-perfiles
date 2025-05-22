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

/* # Escuchar el cambio en el radio de "Rechazar"
---------------------------------------------- */
document.querySelectorAll('input[type="radio"][value="reject"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            // Cuando "Rechazar" es seleccionado, abrir el modal
            const modalId = "modal-02"; 
            openModal(modalId);
        }
    });
});