let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.0336892, lng: -71.5331841 },
    zoom: 15,
  });
}

