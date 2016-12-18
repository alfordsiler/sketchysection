var fs = require('fs');

fs.readFile('heatmap.json', 'utf8', function(err, data) {
  var parsedData = JSON.parse(data).event_clearance_date;
  var newData = [];
  
  for(var key in parsedData) {
    var splitKey = key.split(',');
    var lat = splitKey[0].replace(/\[/g, '')
    var lng = splitKey[1].replace(/]/g, '')
    var weight = parsedData[key];
    var newObj = {
      lat: lat,
      lng: lng,
      weight: weight
    }

    newData.push(newObj);
  }

  var jsonData = JSON.stringify(newData);

  fs.writeFile('newHeatMap.json', jsonData, function(err) {
    console.log('Created json file');
  });
});