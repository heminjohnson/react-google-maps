export const loadMap = (center, zoom) => {
  return new window.google.maps.Map(document.getElementById("map"), {
    center,
    zoom
  });
};

export const loadMapWithMarkers = () => {
  let map = loadMap({ lat: 41.0082, lng: 28.9784 }, 8);

  new window.google.maps.Marker({
    position: { lat: 41.0082, lng: 28.9784 },
    map: map
  });
};

export const loadMapAsClusters = () => {
  let map = loadMap({ lat: -28.024, lng: 140.887 }, 3);

  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let locations = [
    {lat: -31.563910, lng: 147.154312},
    {lat: -33.718234, lng: 150.363181},
    {lat: -33.727111, lng: 150.371124},
    {lat: -33.848588, lng: 151.209834},
    {lat: -33.851702, lng: 151.216968},
    {lat: -34.671264, lng: 150.863657},
    {lat: -35.304724, lng: 148.662905},
    {lat: -36.817685, lng: 175.699196},
    {lat: -36.828611, lng: 175.790222},
    {lat: -37.750000, lng: 145.116667},
    {lat: -37.759859, lng: 145.128708},
    {lat: -37.765015, lng: 145.133858},
    {lat: -37.770104, lng: 145.143299},
    {lat: -37.773700, lng: 145.145187},
    {lat: -37.774785, lng: 145.137978},
    {lat: -37.819616, lng: 144.968119},
    {lat: -38.330766, lng: 144.695692},
    {lat: -39.927193, lng: 175.053218},
    {lat: -41.330162, lng: 174.865694},
    {lat: -42.734358, lng: 147.439506},
    {lat: -42.734358, lng: 147.501315},
    {lat: -42.735258, lng: 147.438000},
    {lat: -43.999792, lng: 170.463352}
  ]

  let markers = locations.map(function(location, i) {
    return new window.google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  new window.MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
};

export const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
  directionsService.route(
    {
      origin: {query: 'Chicago'},
      destination: {query: 'St Louis'},
      travelMode: 'DRIVING'
    },
    function(response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}

export const loadMapWithDirections = () => {
  let directionsService = new window.google.maps.DirectionsService();
  let directionsRenderer = new window.google.maps.DirectionsRenderer();
  let map = loadMap({lat: 41.85, lng: -87.65}, 7);
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer)

}
