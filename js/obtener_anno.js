function pintarAnioActual() {
    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    document.getElementById("year").textContent = anio;
}

// Llamar a la función al cargar la página
pintarAnioActual();