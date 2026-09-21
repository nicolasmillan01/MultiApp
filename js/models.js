class MultiAppModel {
    constructor() {
        this.contador = 0;
        this.mensaje = "";
        this.imagenVisible = true;
    }

    actualizarMensaje(nuevoMensaje) { this.mensaje = nuevoMensaje; }
    obtenerMensaje() { return this.mensaje; }

    incrementar() { this.contador++; }
    disminuir() { this.contador--; }
    reiniciar() { this.contador = 0; }
    obtenerContador() { return this.contador; }

    setVisibilidadImagen(estado) { this.imagenVisible = estado; }
}
