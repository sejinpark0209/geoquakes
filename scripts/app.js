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
    
    var output = responseData.features;
    output.forEach(function(item, index) {
    	var newOutput = output[index].properties.title;
    	$("#info").append('<p>' + newOutput + '</p>');
    	var findLatLng = output[index].geometry.coordinates;

      var listCord = [];
      listCord = findLatLng.reverse();
      listCord.shift();

      console.log(listCord);

      function toObject(arr) {
        var obj = {};
        obj["lat"] = arr[0];
        obj["lng"] = arr[1];
        // for(var i = 0; i < arr.length; i++) {
        //   console.log(arr[i]);
        //   obj["lat"] = arr[i][0];
        //   obj["lng"] = arr[i][1];
        // }
        console.log(obj);
      }
      toObject(listCord);

      // var listCordRev = [];
      // for(var i = 0; i < listCord.length; i++) {
      //   listCord = listCord[i].shift();



    })
    // [0].properties.title;
    // for each (var in output) {
}; 

// var listCord = [];
//       listCord = findLatLng.reverse();
//       listCord.shift();
//       for(var i = 0; )
//       // var listCordRev = [];
//       // for(var i = 0; i < listCord.length; i++) {
//       //   listCord = listCord[i].shift();

//       // }
//       console.log(listCord);
//       for(var i = 0; i < listCord.length; i++) {
//         makePin(listCord[i]);
//       }



var sfLatLng = {lat: 37.78, lng: -122.44};
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: sfLatLng,
	  zoom: 8
	});  // google.maps


// var convPinList = [];

// function multiPin(listCord) {
//   for(var i = 0; i < listCord.length; i++) {
//     var PinList = output[i].geometry.coordinates;
//   }
//   return PinList;
// }
// function


// function makePin() {
//  	var marker = new google.maps.Marker({
//       position: sfLatLng,
//       map: map,
//       title: 'Hello World!'
// 	});   // marker
//  }
}    // initMap
google.maps.event.addDomListener(window, 'load', initMap);
// }
