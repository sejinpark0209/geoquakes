// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
   $.ajax( {
    method: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson" , 
    dataType: "json",
    success: onSuccess
  });   // ajax
});  // doc on ready
  function onSuccess(responseData) {
    console.log(responseData);

    var output = responseData.features[0].properties.title;
    // [0].properties.title;
    // for each (var in output) {
    $("#info").append('<p>' + output+ '</p>');
  
}; 
