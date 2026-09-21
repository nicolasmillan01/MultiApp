class MultiAppModel {
    constructor() {
        this.contador = 0;
        this.mensaje = "";
        this.imagenVisible = true;
    }

    // Lógica del Mensaje
    actualizarMensaje(nuevoMensaje) {
        this.mensaje = nuevoMensaje;
    }
    obtenerMensaje() {
        return this.mensaje;
    }

    // Lógica del Contador
    incrementar() {
        this.contador++;
    }
    disminuir() {
        this.contador--;
    }
    reiniciar() {
        this.contador = 0;
    }
    obtenerContador() {
        return this.contador;
    }

    // Lógica de Imagen
    setVisibilidadImagen(estado) {
        this.imagenVisible = estado;
    }
    obtenerVisibilidadImagen() {
        return this.imagenVisible;
    }
}
