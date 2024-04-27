function cargarYMostrarPrecios() {
    // Cargar el JSON de tarifas de impresión
    fetch('../json/servicios-imp.json')
        .then(response => response.json())
        .then(data => {
            // Construir HTML para mostrar los precios de impresión
            var preciosImpresionHTML = '<h2>Precios de Impresión</h2><div class="row">';
            // Agregar la imagen
            preciosImpresionHTML += '<div class="col-md-4"><img src="../img/Servicios/fotocopia.jpg" alt="Imagen de precios de impresión" class="img-fluid"></div>';
            preciosImpresionHTML += '<div class="col-md-8"><ul>';
            data.tarifas_impresion.forEach(tarifa => {
                preciosImpresionHTML += `<li><strong>${tarifa.descripcion}:</strong> ${tarifa.precio}</li>`;
            });
            preciosImpresionHTML += '</ul></div></div>';
            // Insertar HTML en el contenedor de precios de impresión
            document.getElementById('precios-impresion').innerHTML = preciosImpresionHTML;
        })
        .catch(error => console.error('Error al cargar el JSON de impresión:', error));

    // Cargar el JSON de tarifas de estampado
    fetch('../json/servicios-estam.json')
        .then(response => response.json())
        .then(data => {
            // Construir HTML para mostrar los precios de estampado
            var preciosEstampadoHTML = '<h2>Precios de Estampado</h2><div class="row">';
            // Agregar la imagen
            preciosEstampadoHTML += '<div class="col-md-4"><img src="../img/carrusel/estampado.jpg" alt="Imagen de precios de estampado" class="img-fluid"></div>';
            preciosEstampadoHTML += '<div class="col-md-8"><ul>';
            for (const talla in data.tarifas_estampados[0].tallas) {
                preciosEstampadoHTML += `<li><strong>${talla}:</strong> ${data.tarifas_estampados[0].tallas[talla]}</li>`;
            }
            preciosEstampadoHTML += '</ul></div></div>';
            // Insertar HTML en el contenedor de precios de estampado
            document.getElementById('precios-estampado').innerHTML = preciosEstampadoHTML;
        })
        .catch(error => console.error('Error al cargar el JSON de estampado:', error));
}

// Llamar a la función cuando se cargue la página
window.addEventListener('load', cargarYMostrarPrecios);
