var czmlStream = new Cesium.CzmlDataSource();
function buildClient(){


	//var czmlStream = new Cesium.CzmlDataSource('FlightData');
	var czmlStreamUrl = 'http://localhost:8080/czml-stream';
	var czmlEventStream = new EventSource(czmlStreamUrl);

	czmlEventStream.addEventListener('czml', function(czmlUpdate){
		var czml = JSON.parse(czmlUpdate.data);
		/*
			
		*/
		if(czml[1].name === "flight"){
			var ori = buildQuaternionArray(czml);
			czml[1].orientation = {
						"interpolationAlgorithm" : "LAGRANGE",
						"interpolationDegree" : 5,
						"unitQuaternion" : ori};
		}
		czmlStream.process(czml);
	}, false);

	viewer.dataSources.add(czmlStream);
	
	

}

/*
	Returns an array of timestamps and quaternion values for model orienation.
*/
function buildQuaternionArray(czml){
	var carts = Cesium.Cartesian3.fromDegreesArrayHeights(czml[1].properties.orientationArray);
	var timestamps = czml[1].properties.orientationTime;

	var quats = [];

	var i = 0;
	var source = new Cesium.Cartesian3(-1, 0, 0);
	var dest = new Cesium.Cartesian3();
	var forward = new Cesium.Cartesian3();
	var dot = 0;
	var cross = new Cesium.Cartesian3();
	var angle = 0;
	var axis = new Cesium.Cartesian3();
	var q = new Cesium.Quaternion();
	while(i<timestamps.length-1){
		quats.push(timestamps[i]);

		Cesium.Cartesian3.subtract(carts[i], carts[i+1], forward);
		Cesium.Cartesian3.normalize(forward, dest);
		//Rotation Angle
		dot = Cesium.Cartesian3.dot(source, dest);
		angle = Math.acos(dot);
		//Rotation Axis
		Cesium.Cartesian3.cross(source, dest, cross);
		Cesium.Cartesian3.normalize(cross, axis);

		Cesium.Quaternion.fromAxisAngle(axis, angle, q);

		quats.push(q.x);
		quats.push(q.y);
		quats.push(q.z);
		quats.push(q.w);
		i++;
	}

	quats.push(timestamps[timestamps.length-1]);
	quats.push(q.x);
	quats.push(q.y);
	quats.push(q.z);
	quats.push(q.w);

	return quats;
}
