document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Validar los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value;
    const interes = document.getElementById('interes').value;
    
    if (!nombre || !email || !empresa || !interes) {
    alert('Por favor, complete todos los campos del formulario.');
    return; // Evita que el formulario se envíe si falta algún campo
    }
    
//Envia el formulario
    form.submit();
    });
   });