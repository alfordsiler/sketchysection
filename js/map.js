$(document).ready(function() {
  // Intialize our map
  var center = new google.maps.LatLng(47.608048, -122.335389);
  var mapOptions = {
    zoom: 13,
    center: center,
    draggable: true
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  $.ajax({
    url: "https://data.seattle.gov/resource/7ayk-pspk.json",
    method: "GET",
    datatype: "json",
    data: {
      "$limit" : 10000,
      "$$app_token" : "LQDnUrd2famQS94Fa97DLfC5J"
    }
  }).done(function(data) {
    var heatmapData = [];
    for(var i = 0; i < data.length; i++){
      var latLng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
      heatmapData.push(latLng);
    }
    console.log(heatmapData)
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: true,
      radius: 30,
      map: map
    });
  });
});