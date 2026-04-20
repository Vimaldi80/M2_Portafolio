document.addEventListener("DOMContentLoaded", () => {

    const producto = new URLSearchParams(window.location.search).get("producto");

    const productos = {
        casco: {
            nombre: "Casco MTB Naranjo",
            precio: "$34.990",
            descripcion: "Protección, estilo y confianza en cada salida.",
            imagen: "assets/img/casco_naranjo_mtb_p.png",
            caracteristicas: [
                "🛡️ Alta protección",
                "🌬️ Ventilación óptima",
                "🎯 Ajuste cómodo",
                "🎨 Diseño llamativo"
            ]
        },
        kit: {
            nombre: "Kit Antipinchazo",
            precio: "$19.990",
            descripcion: "Que nada te detenga en tu ruta.",
            imagen: "assets/img/kit_herramienta_bolso.png",
            caracteristicas: [
                "🔧 Multiherramienta",
                "🛠️ Desmontadores incluidos",
                "🩹 Parches rápidos",
                "🚲 Bomba portátil"
            ]
        },
        guantes: {
            nombre: "Guantes Mujer",
            precio: "$12.990",
            descripcion: "Comodidad y control en cada pedaleo.",
            imagen: "assets/img/guantes_largos_mujer2.png",
            caracteristicas: [
                "✋ Diseño ergonómico",
                "💨 Transpirables",
                "🤲 Mejor agarre",
                "💖 Diseño femenino"
            ]
        }
    };

    const data = productos[producto];

    if (!data) {
        document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
        return;
    }

    document.getElementById("nombre").textContent = data.nombre;
    document.getElementById("precio").textContent = data.precio;
    document.getElementById("descripcion").textContent = data.descripcion;
    document.getElementById("imagen").src = data.imagen;

    const lista = document.getElementById("caracteristicas");
    lista.innerHTML = "";

    data.caracteristicas.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });

});