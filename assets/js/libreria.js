document.addEventListener("DOMContentLoaded", () => {

    // Obtener contador guardado
    let contador = localStorage.getItem("contador") || 0;

    const contadorHTML = document.getElementById("contador");

    if (contadorHTML) {
        contadorHTML.textContent = contador;
    }

    const botones = document.querySelectorAll(".btn-bike");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            contador++;
            localStorage.setItem("contador", contador);

            if (contadorHTML) {
                contadorHTML.textContent = contador;
            }

        });
    });

});



