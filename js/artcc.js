// Chris Heisler
// 2/15/2017
// Draw the ARTCC Boundaries onto the cesium view
function drawARTCC(viewer){
	Cesium.loadJson('../data/ARTCC_Boundaries.json').then(function(artcc){
		// Get collection of boundaries from json
		var boundaries = artcc.features;
		// Iterate through the boundaries
		for(j=0; j < boundaries.length; j++){
			var bound = boundaries[j]
			// Grab the coordinates that form the boundary at index j
			var coor = bound.geometry.coordinates;
			// Place the lat and long of each coordinate point into an array as [lat, long, lat, long....]
			var foo = [];
			for(i=0; i < coor.length; i++){
				foo.push(coor[i][0]);
				foo.push(coor[i][1]);
			}
			// Convert the lat long points into cartesian 3s
			var foocart = Cesium.Cartesian3.fromDegreesArray(foo);
			// Calculate the position approximatly at the center to the boundary j
			var pos = new Cesium.Cartesian3();
			for(i=0; i < foocart.length; i++){
				Cesium.Cartesian3.add(pos, foocart[i], pos);	
			}
			Cesium.Cartesian3.divideByScalar(pos, foocart.length, pos);
			// Create the entity for the boundary and add it to the viewers collection of entities
			var foobar = viewer.entities.add({
				name : bound.properties.name,
				position : pos,
				polygon : {
					hierarchy : foocart,
					height : 0,
					material : Cesium.Color.WHITE.withAlpha(0.2),
					outline : true,
					outlineColor : Cesium.Color.WHITE.withAlpha(0.5),
					outlineWidth : 50
				}
			});
		}
	});
}
