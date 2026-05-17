document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const numberInput = document.getElementById('numberInput');
    const placeholderContent = document.getElementById('placeholderContent');
    const tableOutput = document.getElementById('tableOutput');

    // Función principal para generar la tabla
    function generateTable() {
        const value = parseInt(numberInput.value);

        // Validación simple
        if (isNaN(value)) {
            alert('Por favor, ingresa un número válido.');
            return;
        }

        // Ocultar el placeholder e iniciar la vista de la tabla
        placeholderContent.classList.add('hidden');
        tableOutput.classList.remove('hidden');
        
        // Limpiar resultados anteriores
        tableOutput.innerHTML = '';

        // Cambiar dinámicamente el estilo del contenedor del resultado a 'block' para las filas
        tableOutput.parentNode.style.alignItems = 'flex-start';

        // Generar las filas del 1 al 10 de la tabla de multiplicar
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('div');
            row.classList.add('table-row');
            
            // Efecto de delay cascada sutil para la animación de aparición
            row.style.animationDelay = `${i * 0.04}s`; 

            row.innerHTML = `
                <span>${value} <span class="multiplier">x</span> ${i}</span>
                <span class="result">= ${value * i}</span>
            `;
            tableOutput.appendChild(row);
        }
    }

    // Evento al hacer click en el botón "CALCULAR"
    calculateBtn.addEventListener('click', generateTable);

    // Permitir lanzar el cálculo presionando la tecla "Enter"
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateTable();
        }
    });
});