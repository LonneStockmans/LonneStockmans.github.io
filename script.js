$(".pdw-faciliteiten").on("mouseenter mouseleave", function() {
    $('.pdw-faciliteiten-dropdown').toggleClass("d-none")
})



// Initialize and add the map
let map;

async function initMap() {
  // The location of PDW
  const position = { lat: 50.94544, lng: 5.26393 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at PDW
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Poppy's Doggy Wash",
  });
}

initMap();