const shrineLocations = [
  {"name":"愛宕神社", "municipality":"梨沢", "lat":35.1934178, "lang":139.8763552},
  {"name":"妙見神社", "municipality":"相川", "lat":35.2097162, "lang":139.8778103},
  {"name":"八雲神社", "municipality":"岩坂", "lat":35.2231675, "lang":139.8774274}
]

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.382490, lng: 140.185072 },
    zoom: 10,
  });

  for (const address of shrineLocations) {
    const latlang = new google.maps.LatLng(address.lat,address.lang);
    const maker = new google.maps.Marker({position : latlang, map: map});
    const detail = new google.maps.InfoWindow({
      content: `<dev class="detail">${address.municipality} ${address.name}</dev>`
    });
    maker.addListener('click', () => {
      detail.open(map, maker);
    });
  }
}
