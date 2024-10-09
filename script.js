document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form")
    const email = document.querySelector(".contacto__campo")
    const mensaje = document.querySelector(".contacto__campo--textarea")

    const errorParrafo = document.createElement('p');
    errorParrafo.textContent = ''; 
    errorParrafo.style.color = 'red';; 

    form.appendChild(errorParrafo);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        errorParrafo.textContent = '';

        
        if(email.value === '' || mensaje.value === ''){
            errorParrafo.textContent = 'Llenar todos los campos';
        }

    });

});