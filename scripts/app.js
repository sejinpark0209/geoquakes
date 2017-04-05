// define globals
var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {

  $quakesList = $('#info');

  createMap();
  fetchQuakeData();

});

function createMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 2
  });
}

function fetchQuakeData() {
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    success: onSuccess,
    error: onError
  });
}

function templateQuake(earthquake){
  return `<hr> \n<p>${earthquake.properties.title}</p>`
}

function onSuccess(json) {
  var earthquakes = json.features;
  var quakeHtml;
  var lat, lng;
  // iterate through earthquakes
  earthquakes.forEach(function (quake) {
    // pass in data to render in the template
    quakeHtml = templateQuake(quake);

    // append html to the view
    $quakesList.append(quakeHtml);

    // create map markers
    lat = quake.geometry.coordinates[1];
    lng = quake.geometry.coordinates[0];
    new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
      title: quake.properties.title
    });
  });
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}
