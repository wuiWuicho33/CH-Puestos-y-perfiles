/* # Add input
---------------------------------------------- */
// Agregar área
function initComponent(component) {
    const addItemBtn = component.querySelector('.addItemBtn');
    const inputArea = component.querySelector('.inputArea');
    const cancelBtn = component.querySelector('.cancelBtn');
    const addBtn = component.querySelector('.addBtn');
    const areaInput = component.querySelector('.areaInput');
    const addedItemsContainer = component.querySelector('.added-items');

    // Mostrar el área de inputs cuando se hace clic en el botón "Añadir un área"
    addItemBtn.addEventListener('click', function() {
        addItemBtn.style.display = 'none';
        inputArea.style.display = 'block';
    });

    // Ocultar el área de inputs cuando se hace clic en "Cancelar"
    cancelBtn.addEventListener('click', function() {
        inputArea.style.display = 'none';
        addItemBtn.style.display = 'block';
        areaInput.value = '';  // Limpiar el input
    });

    // Añadir un nuevo área cuando se hace clic en "Añadir"
    addBtn.addEventListener('click', function() {
        const area = areaInput.value.trim();
        
        if (area) {
            const newItem = document.createElement('div');
            newItem.classList.add('added-item');
            newItem.innerHTML = `
                <label>Área</label>
                <input type="text" value="${area}">
                <a href="#" class="delete-link">
                    <i class="fa-solid fa-trash"></i>
                    Eliminar                    
                </a>
            `;

            // Añadir el nuevo item al contenedor de items añadidos
            addedItemsContainer.appendChild(newItem);
            inputArea.style.display = 'none';
            addItemBtn.style.display = 'block';
            areaInput.value = '';  // Limpiar el input
        } else {
            alert('Por favor, ingresa un área.');
        }
    });

    // Eliminar un item cuando se hace clic en "Eliminar"
    addedItemsContainer.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-link')) {
            event.target.closest('.added-item').remove();
        }
    });
}

// Inicializar todos los componentes en la página
const components = document.querySelectorAll('#wrapper-item');
components.forEach(component => {
    initComponent(component);
});

// Agregar 3 inputs
document.addEventListener("DOMContentLoaded", function() {
    const components = document.querySelectorAll('#component-container');

    components.forEach(component => {
        const addNewItemBtn = component.querySelector('.addNewItemBtn');
        const inputSection = component.querySelector('.inputSection');
        const cancelButton = component.querySelector('.cancelButton');
        const addButton = component.querySelector('.addButton');
        const addedItemsContainer = component.querySelector('.addedItemsContainer');
        const conceptInput = component.querySelector('.conceptInput');
        const rangeSelect = component.querySelector('#a-range-01'); // Ahora es un select
        const levelInput = component.querySelector('.levelInput');

        // Mostrar el área para añadir un nuevo elemento
        addNewItemBtn.addEventListener('click', function() {
            addNewItemBtn.style.display = 'none';
            inputSection.style.display = 'block';
        });

        // Ocultar el área de inputs y mostrar el botón "Añadir un elemento" nuevamente
        cancelButton.addEventListener('click', function() {
            inputSection.style.display = 'none';
            addNewItemBtn.style.display = 'block';
            conceptInput.value = '';
            rangeSelect.selectedIndex = 0;  // Resetear el select
            levelInput.value = '';
        });

        // Añadir un nuevo elemento con los valores de los inputs
        addButton.addEventListener('click', function() {
            const concept = conceptInput.value;
            const range = rangeSelect.value;  // Obtener el valor seleccionado del select
            const level = levelInput.value;

            if (concept && range && level) {
                const addedItem = document.createElement('div');
                addedItem.classList.add('addedItem');
                
                // Crear un nuevo select para el rango con las mismas opciones
                const rangeOptionsHTML = `
                    <option value="" disabled selected>-- Selecciona --</option>
                    <option value="Nivel 2: 2.00-2.23">Nivel 2: 2.00-2.23</option>
                    <option value="Nivel 2: 2.30-2.53">Nivel 2: 2.30-2.53</option>
                    <option value="Nivel 3: 2.30-2.83">Nivel 3: 2.30-2.83</option>
                    <option value="Nivel 3: 2.30-3.13">Nivel 3: 2.30-3.13</option>
                    <option value="Nivel 3: 3.30-3.43">Nivel 3: 3.30-3.43</option>
                    <option value="Nivel 4: 3.50-3.63">Nivel 4: 3.50-3.63</option>
                    <option value="Nivel 4: 3.70-3.86">Nivel 4: 3.70-3.86</option>
                    <option value="Nivel 4: 3.87-4.00">Nivel 4: 3.87-4.00</option>
                `;

                // Crear el select dinámicamente para el nuevo item
                const rangeSelectElement = document.createElement('select');
                rangeSelectElement.classList.add('addedInput');
                rangeSelectElement.innerHTML = rangeOptionsHTML;
                rangeSelectElement.value = range; // Establecer el valor seleccionado

                const addedItemHTML = `
                    <div class="inputRow">
                        <div class="inputColumn">
                            <label for="concept">Concepto</label>
                            <input type="text" class="addedInput" placeholder="Introduce el concepto" value="${concept}">
                        </div>
                        <div class="inputColumn">
                            <label for="range">Rango</label>
                            ${rangeSelectElement.outerHTML} <!-- Insertar el select dinámico -->
                        </div>
                        <div class="inputColumn">
                            <label for="level">Nivel de desarrollo de competencia</label>
                            <input type="text" class="addedInput" placeholder="Introduce el nivel de competencia" value="${level}">
                        </div>
                    </div>
                    <a href="#" class="deleteLink">
                        <i class="fa-solid fa-trash"></i>
                        Eliminar
                    </a>
                `;

                addedItem.innerHTML = addedItemHTML;
                addedItemsContainer.appendChild(addedItem);

                inputSection.style.display = 'none';
                addNewItemBtn.style.display = 'block';
                conceptInput.value = '';
                rangeSelect.selectedIndex = 0;  // Resetear el select
                levelInput.value = '';
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });

        // Funcionalidad para eliminar un item
        addedItemsContainer.addEventListener('click', function(event) {
            if (event.target && event.target.classList.contains('deleteLink')) {
                event.target.closest('.addedItem').remove();
            }
        });
    });
});
