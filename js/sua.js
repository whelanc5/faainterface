/*
Chris Heisler
2/15/2017
Draw Special Use Airspaces
*/

function drawSUAs(viewer){
	/*
		CZML structure of sample SUA data.
	*/
	var sua = [{

		"id" : "document",
		"name" : "SUA Data",
		"version" : "1.0",
		"clock" : {
			"currentTime": "2017-03-05T00:00:00Z",
			"interval": "2017-03-05T00:00:00Z/2017-03-06T02:00:00Z",
			"multiplier": 10
		}
	},
	{
		"id" : "NOTAM_AHA_NOMINAL_2009_3675",
		"name": "NOTAM_AHA_NOMINAL_2009_3675",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:58:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
				-120.03, 30.464, 0,
				-120.43, 30.779, 0,
				-120.85, 31.12, 0,
				-121.28, 31.477999999999998, 0,
				-121.71000000000001, 31.846999999999998, 0,
				-122.36999999999999, 32.418, 0,
				-121.74, 32.905, 0,
				-121.1,  33.391, 0,
				-120.42, 32.814, 0,
				-120,    32.424, 0,
				-119.61, 32.03, 0,
				-119.24, 31.642, 0,
				-118.92, 31.267, 0,
				-120.03, 30.464, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T18:24:00Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T18:24:00Z/2017-03-05T18:51:00Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						 "interval": "2017-03-05T18:51:00Z/2018-03-05T18:58:00Z",
						 "rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T18:24:00Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T18:24:00Z/2017-03-05T18:51:00Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			 "interval": "2017-03-05T18:51:00Z/2018-03-05T18:58:00Z",
			 "rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	},
	{
		"id"  : "NOTAM_AHA_781_826",
		"name": "NOTAM_AHA_781_826",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
            -90.04646055555556, -6.029005277777777, 0,
			-89.23616611111112, -5.449284722222222, 0,
            -106.83113472222222, 18.044711666666668, 0,
            -107.44850194444444, 17.23079333333333, 0,
            -90.04646055555556, -6.029005277777777, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-05T20:58:02.046Z/2017-03-05T18:04:00Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T18:04:00Z/2017-03-05T18:49:00Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T18:49:00Z/2018-03-05T18:49:00Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-05T20:58:02.046Z/2017-03-05T18:04:00Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T18:04:00Z/2017-03-05T18:49:00Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T18:49:00Z/2018-03-05T18:49:00Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	},

	{
		"id"  : "NOTAM_AHA_826_871",
		"name": "NOTAM_AHA_826_871",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
				-99.61497027777777,  7.413609166666667, 0,
				-98.88401222222222,  8.02760638888889, 0,
				-114.1187136111111,  26.20978138888889, 0,
				-114.69578555555556, 25.6880625, 0,
				-99.61497027777777,  7.413609166666667, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-05T20:58:02.046Z/2017-03-05T18:04:00Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T18:04:00Z/2017-03-05T18:49:00Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T18:49:00Z/2018-03-05T18:49:00Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-05T20:58:02.046Z/2017-03-05T18:04:00Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T18:04:00Z/2017-03-05T18:49:00Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T18:49:00Z/2018-03-05T18:49:00Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
	}
	},
	{
		"id"  : "NOTAM_AHA_871_916",
		"name": "NOTAM_AHA_871_916",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
            -106.80913472222223, 16.9391775, 0,
            -106.19359111111112, 17.530692777777777, 0,
            -120.31262, 32.114827222222225, 0,
            -120.92816333333334, 31.655276388888886, 0,
            -106.80913472222223, 16.9391775, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T18:49:00Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T18:49:00Z/2017-03-05T19:34:02.046Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T19:34:02.046Z/2018-03-05T18:49:00Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T18:49:00Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T18:49:00Z/2017-03-05T19:34:02.046Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T19:34:02.046Z/2018-03-05T18:49:00Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	},
	{
		"id"  : "NOTAM_AHA_916_961",
		"name": "NOTAM_AHA_916_961",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
            -112.46444055555556, 23.258803055555557, 0,
            -111.54112527777778, 24.215014166666666, 0,
            -125.73709694444445, 36.26900638888889, 0,
            -126.19875444444445, 35.737589444444446, 0,
            -112.46444055555556, 23.258803055555557, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T19:34:02.046Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T19:34:02.046Z/2017-03-05T20:20:02.046Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T20:20:02.046Z/2018-04-18T24:13:02.046Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T19:34:02.046Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T19:34:02.046Z/2017-03-05T20:20:02.046Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T20:20:02.046Z/2018-04-18T24:13:02.046Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	},
	{
		"id"  : "NOTAM_AHA_961_1006",
		"name": "NOTAM_AHA_961_1006",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
            -117.25473944444444, 27.938879166666666, 0,
            -115.9773663888889, 29.199179444444443, 0,
            -129.3522125, 38.8730175, 0,
            -129.80305, 37.867416666666664, 0,
            -117.25473944444444, 27.938879166666666, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T21:05:02.046Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T21:05:02.046Z/2017-03-05T21:50:02.046Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T21:50:02.046Z/2018-04-18T24:13:02.046Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T21:05:02.046Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T21:05:02.046Z/2017-03-05T21:50:02.046Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T21:50:02.046Z/2018-04-18T24:13:02.046Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	},
	{
		"id"  : "NOTAM_AHA_POSTBURN_1006_2602",
		"name": "NOTAM_AHA_POSTBURN_1006_2602",
		"availability":"2016-03-04T20:58:02.046Z/2018-03-05T18:49:00Z",
		"polygon" : {
			"positions" : {
				"cartographicDegrees" : [
            -117.25473944444444, 27.938879166666666, 0,
            -115.9773663888889, 29.199179444444443, 0,
            -129.3522125, 38.8730175, 0,
            -129.80305, 37.867416666666664, 0,
            -117.25473944444444, 27.938879166666666, 0
				]
			},
			"material" : {
				"solidColor" : {
					"color" : [{
						"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T21:50:02.046Z",
						"rgbaf" : [0, 1, 1, 0.05]
					}, {
						"interval" : "2017-03-05T21:50:02.046Z/2017-03-05T22:35:02.046Z",
						"rgbaf" : [1, 0, 0, 0.05]
					},
					  {
						"interval": "2017-03-05T22:35:02.046Z/2018-04-18T24:13:02.046Z",
						"rgbaf"    : [0.169,0.169,0.169,0.05]
					  }

					]
				}
			},
		"height" : 50000,
		"extrudedHeight": 200000,
		"outline" : true,
		"outlineWidth" : 1,
		"outlineColor" : [{
			"interval" : "2016-03-04T20:58:02.046Z/2017-03-05T21:50:02.046Z",
			"rgbaf" : [0, 1, 1, 0.75]
		}, {
			"interval" : "2017-03-05T21:50:02.046Z/2017-03-05T22:35:02.046Z",
			"rgbaf" : [1, 0, 0, 0.75]
		},
			{
			"interval": "2017-03-05T22:35:02.046Z/2018-04-18T24:13:02.046Z",
			"rgbaf"    : [0.169,0.169,0.169,0.75]
			}

		]
		}
	}
];
	var suaData = Cesium.CzmlDataSource.load(sua);
	viewer.dataSources.add(suaData);

	var array = viewer.dataSources._dataSources[1].entities._entities._array;
	
	array.forEach(addSUA);
	function addSUA(entity){
		var name = entity.name.split('_');
		entity.description = '<center><img src="http://www.freeiconspng.com/uploads/glossy-3d-blue-plane-icon--clean-3d-iconset--mysitemywaym-29.png" alt="HTML5 Icon" style="width:50px;height:50px;"><table><tr><th>SUA: </th></tr ><tr><td>' + entity.id + '</td></tr></table></center>';
		$("#SUA").append("<li id=" + entity.id + " class='entity sua'>"
		+ "<a href='#' onclick='return false;' style='display: inline' class='fa fa-check-square'></a>"
		+ "</a><a id=" + entity.id + " href='#' class='entity text' onclick='return false;' style='display: inline'>"
		+ name[2] + name[3] +"</a></li>");
	}
}
