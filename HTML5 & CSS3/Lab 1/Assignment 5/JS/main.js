navigator.geolocation.getCurrentPosition(function(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  initMap(latitude,longitude);
},function(){
  alert("Try Again");
});
let select = document.querySelector("select");
select.onchange = function() {
  let country = select.options[select.selectedIndex];
  let latitude = Number(country.dataset.lat);
  let longitude = Number(country.dataset.lng);
  initMap(latitude,longitude);
}
function initMap(latitude,longitude) {
  const myLatLng = { lat: latitude, lng: longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
  });

  new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
  });
}

window.initMap = initMap;