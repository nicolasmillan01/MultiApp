class MultiAppView {
    constructor() {
        this.textoMensaje = document.getElementById("texto-mensaje");
        this.textoContador = document.getElementById("texto-contador");
        this.imagen = document.getElementById("imagen-toggle");
    }

    mostrarSaludo(nombre) {
        alert(`¡Hola, ${nombre}! Bienvenido a Multi App.`);
    }

    actualizarTextoMensaje(mensaje) {
        this.textoMensaje.textContent = mensaje;
    }

    actualizarTextoContador(valor) {
        this.textoContador.textContent = valor;
    }

    actualizarImagen(visible) {
        this.imagen.style.display = visible ? "block" : "none";
    }
}