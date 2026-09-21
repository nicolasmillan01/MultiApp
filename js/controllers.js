document.addEventListener("DOMContentLoaded", () => {
    // Instanciamos el modelo y la vista
    const modelo = new MultiAppModel();
    const vista = new MultiAppView();

    // 1️⃣ Saludar al Usuario
    const inputSaludo = document.getElementById("input-saludo");
    document.getElementById("btn-saludar").addEventListener("click", () => {
        if (inputSaludo.value) {
            vista.mostrarSaludo(inputSaludo.value);
            inputSaludo.value = ""; // Limpiar input
        }
    });

    // 2️⃣ Cambiar Mensaje
    const inputMensaje = document.getElementById("input-mensaje");
    document.getElementById("btn-cambiar").addEventListener("click", () => {
        modelo.actualizarMensaje(inputMensaje.value);
        vista.actualizarTextoMensaje(modelo.obtenerMensaje());
        inputMensaje.value = "";
    });

    // 3️⃣ Contador
    document.getElementById("btn-sumar").addEventListener("click", () => {
        modelo.incrementar();
        vista.actualizarTextoContador(modelo.obtenerContador());
    });

    document.getElementById("btn-restar").addEventListener("click", () => {
        modelo.disminuir();
        vista.actualizarTextoContador(modelo.obtenerContador());
    });

    document.getElementById("btn-reiniciar").addEventListener("click", () => {
        modelo.reiniciar();
        vista.actualizarTextoContador(modelo.obtenerContador());
    });

    // 4️⃣ Mostrar y Ocultar
    document.getElementById("btn-mostrar").addEventListener("click", () => {
        modelo.setVisibilidadImagen(true);
        vista.actualizarImagen(true);
    });

    document.getElementById("btn-ocultar").addEventListener("click", () => {
        modelo.setVisibilidadImagen(false);
        vista.actualizarImagen(false);
    });
});