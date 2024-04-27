// Función para inicializar el mapa
function initMap() {
    // Verificar si el navegador es Chrome
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    
    // Obtener la ubicación actual del usuario
    if ("geolocation" in navigator) {
        // Solicitar permiso de ubicación específicamente en Chrome si es necesario
        if (isChrome) {
            navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
                if (permissionStatus.state === 'prompt') {
                    navigator.geolocation.getCurrentPosition(function() {}, function() {});
                }
            });
        }

        navigator.geolocation.getCurrentPosition(function(position) {
            var ubicacionActual = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Coordenadas del punto de negocio (ejemplo)
            var puntoNegocio = { lat: 9.969636, lng: -84.2259848 }; 
            
            // Crear un nuevo mapa en el div #map
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: ubicacionActual
            });

            // Crear marcador en la ubicación actual
            var marker = new google.maps.Marker({
                position: ubicacionActual,
                map: map,
                title: 'Tu ubicación actual'
            });

            // Crear marcador en el punto de negocio
            var negocioMarker = new google.maps.Marker({
                position: puntoNegocio,
                map: map,
                title: 'Punto de negocio'
            });

            // Calcular ruta entre la ubicación actual y el punto de negocio
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            var request = {
                origin: ubicacionActual,
                destination: puntoNegocio,
                travelMode: 'DRIVING'
            };

            directionsService.route(request, function(result, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(result);
                    var distancia = result.routes[0].legs[0].distance.text;
                    // Mostrar mensaje si la distancia es menor a 1km
                    if (parseFloat(result.routes[0].legs[0].distance.value) < 1000) {
                        $('#mensaje').text('¡¡¡Estás cerca, aprovecha y visítanos!!!');
                    }
                } else {
                    window.alert('No se pudo calcular la ruta: ' + status);
                }
            });
        }, function(error) {
            // Manejar errores de geolocalización
            console.error('Error al obtener la ubicación: ', error);
        });
    } else {
        window.alert('Tu navegador no soporta la geolocalización.');
    }
}

// Llamar a la función initMap al cargar la página
initMap();