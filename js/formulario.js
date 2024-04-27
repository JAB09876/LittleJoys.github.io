const salarioInput = document.getElementById('ingreso');
        const salarioOutput = document.getElementById('salarioOutput');

        salarioInput.addEventListener('input', function() {
            salarioOutput.textContent = `${this.value} colones`;
        });

        document.getElementById('registroForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
            const email = document.getElementById('email').value;
            const nombre = document.getElementById('nombre').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const genero = document.getElementById('genero').value;
            const gradoAcademico = document.getElementById('gradoAcademico').value;
        
            if (!email || !nombre || !fechaNacimiento || !genero || !gradoAcademico) {
                alert('Por favor completa todos los campos.');
                return;
            }
        
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un correo electrónico válido.');
                return;
            }
        
            // Aquí puedes agregar más validaciones según tus requerimientos
        
            // Si todas las validaciones pasan, puedes enviar el formulario
            this.submit();
        });
        