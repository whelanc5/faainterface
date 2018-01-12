//Created 10/7/17 by Alex Colassi
//Updated 10/8/10/17
/*
 No longer in use 12/18/17
*/


function drawFIXES(viewer){

	
// Pulled in from JSON
var data =
    [{
        "Name": "Point 1",
        "Lat": 28.6272746,
        "Lon": -80.6207835,
        "Alt": 0
    },
     {
         "Name": "Point 2",
        "Lat": 48.194959,
        "Lon": -20.978630,
        "Alt": 0
    },
    {
        "Name": "Point 3",
        "Lat": 20.454515,
        "Lon": 77.524808,
        "Alt": 0
    },
     {
         "Name": "Point 4",
        "Lat": 40.27047401,
        "Lon": -75.83260188,
        "Alt": 0
    },
     {
         "Name": "Point 5",
        "Lat": 35.3778,
        "Lon": -81.9869,
        "Alt": 0
    },
     {
         "Name": "Point 6",
        "Lat": 41.6520,
        "Lon": -87.3930,
        "Alt": 0
    },
     {
         "Name": "Point 7",
        "Lat": 35.7523,
        "Lon": -88.6763,
        "Alt": 0
    },
     {
         "Name": "Point 8",
        "Lat": 37.4568,
        "Lon": -81.7328,
        "Alt": 0
    },
     {
         "Name": "Point 9",
        "Lat": 38.8652,
        "Lon": -84.4259,
        "Alt": 0
    },
     {
         "Name": "Point 10",
        "Lat": 34.8907,
        "Lon": -85.3069,
        "Alt": 0
    },
     {
         "Name": "Point 11",
        "Lat": 33.9295,
        "Lon": -94.1793,
        "Alt": 0
    },
     {
         "Name": "Point 12",
        "Lat": 39.2007,
        "Lon": -87.1512,
        "Alt": 0
    },
     {
         "Name": "Point 13",
        "Lat": 42.2361,
        "Lon": -79.6318,
        "Alt": 0
    },
     {
         "Name": "Point 14",
        "Lat": 43.3883,
        "Lon": -96.1472,
        "Alt": 0
    },
     {
         "Name": "Point 15",
        "Lat": 27.4790,
        "Lon": -80.3232,
        "Alt": 0
    },
     {
         "Name": "Point 16",
        "Lat": 40.8588,
        "Lon": -79.7388,
        "Alt": 0
    }];

var polylineArray = [];

for(var i = 0; i < data.length; i ++)
{
    viewer.entities.add({
        name : data[i].Name,
        description : `Name: ${data[i].Name}<br/>Latitude: ${data[i].Lat}<br />Longitude: ${data[i].Lon}<br />Altitude: ${data[i].Alt}`,
        position : Cesium.Cartesian3.fromDegrees(data[i].Lon, data[i].Lat, data[i].Alt),
        point : {
            pixelSize: 10,
            color: Cesium.Color.RED
        }
    });
    
    if(data[i + 1])
    {
        polylineArray.push(data[i].Lon, data[i].Lat, data[i].Alt,data[i + 1].Lon, data[i + 1].Lat, data[i + 1].Alt);
    }
}

//Highlights Fix Points on Click
var previousPickedEntity = undefined;
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function(movement) {
    var pickedPrimitive = viewer.scene.pick(movement.position);
    var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
    // Unhighlight the previously picked entity
    if (Cesium.defined(previousPickedEntity)) {
        previousPickedEntity.point.scale = 1.0;
        previousPickedEntity.point.color = Cesium.Color.RED;
    }
    // Highlight the currently picked entity
    if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.point)) {
        pickedEntity.point.scale = 2.0;
        pickedEntity.point.color = Cesium.Color.ORANGERED;
        previousPickedEntity = pickedEntity;
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


/*
var trajectory = viewer.entities.add({
    name : 'Trajectory Path',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArrayHeights(polylineArray),
        width : 4,
        material: Cesium.Color.CYAN
    }
});
*/
}
function fromLatLon(value)
  {
      var output = parseFloat(value.substr(0, value.length - 1));
      var direction = value.substr(-1);
      
      if(direction === 'W' || direction === 'E')
      {
          output /= 1000000.0;
      }
      else if(direction === 'N' || direction === 'S')
      {
          output /= 1000000.0;
      }
      
      if(direction === 'S' || direction === 'W')
      {
          output *= -1;
      }
      return output;
  }
  
  function init(viewer)
  {
      console.log("init");
      
        var distHide = new Cesium.DistanceDisplayCondition(0.0, 1500000.0);
      $.ajax("http://localhost:3000/fixes", {dataType : "json"}).done(function(data)
      {
          console.log(data);
          for(var idx in data)
          {
              var fix = data[idx].fixBaseRecord;
              console.log("Adding Fix", idx, fromLatLon(fix.coordinate.latLonCoordinates.longitude), fromLatLon(fix.coordinate.latLonCoordinates.latitude));
              viewer.entities.add({
                  position: Cesium.Cartesian3.fromDegrees(fromLatLon(fix.coordinate.latLonCoordinates.longitude), fromLatLon(fix.coordinate.latLonCoordinates.latitude)),
                  name : fix.fixName,
                  point : {
                      color : Cesium.Color.BLUE,
                      pixelSize : 10
                    },
                    properties:
                    {
                        "fixType": fix.fixType
                    }
                });
          }
      });
  }
  
//$(document).ready(init);
//drawFIXES(viewer);