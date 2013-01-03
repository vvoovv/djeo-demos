define([
	"dojo/_base/declare",
	"djeo/util/_base"
], function(declare, u) {

var earthRadius = 6378137;

function getDistance(p1, p2) {
	var lon1 = p1[0],
		lat1 = p1[1],
		lon2 = p2[0],
		lat2 = p2[1],
		lon1 = u.degToRad(lon1),
		lat1 = u.degToRad(lat1),
		lon2 = u.degToRad(lon2),
		lat2 = u.degToRad(lat2),
		dlat = lat2-lat1,
		dlon = lon2-lon1,
		a = Math.pow(Math.sin(dlat/2), 2) + Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin(dlon/2), 2),
		c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))
	;
	return earthRadius * c;
}

return {
	getInitialPositions: function(trackCoords, numObjects, objectDistance){
		var trackCoordIndex = 0,
			p1 = trackCoords[trackCoordIndex],
			p2 = trackCoords[trackCoords.length-2],
			carPositions = [[p1, Math.atan2(p1[0]-p2[0], p1[1]-p2[1])]],
			carPosition = p1
		;
		for (var i=1; i<numObjects; i++) {
			var result = this.movePointAlongTrack(carPosition, objectDistance, trackCoords, trackCoordIndex, false);
			carPosition = result[0];
			trackCoordIndex = result[1];
			carPositions.push([carPosition, result[2]]);
		}
		return carPositions;
	},
	
	movePointAlongTrack: function(point, distance, trackCoords, trackCoordIndex, clockwise) {
		console.debug(distance);
		var numTrackCoords = trackCoords.length,
			lastTrackCoordIndex
		;
		while(true) {
			lastTrackCoordIndex = trackCoordIndex;
			// trackCoords[0] === trackCoords[numTrackCoords-1]
			if (clockwise) {
				trackCoordIndex = trackCoordIndex<(numTrackCoords-1) ? trackCoordIndex+1 : 1;
			}
			else {
				trackCoordIndex = trackCoordIndex>0 ? trackCoordIndex-1 : numTrackCoords-2;
			}
			var trackPoint = trackCoords[trackCoordIndex];
			// calculate distance to the next trackPoint
			var distanceToNextTrackPoint = getDistance(point, trackPoint);
			if (distanceToNextTrackPoint >= distance) {
				var ratio = distance/distanceToNextTrackPoint;
				point = [point[0]*(1-ratio)+trackPoint[0]*ratio, point[1]*(1-ratio)+trackPoint[1]*ratio];
				var p1 = trackCoords[lastTrackCoordIndex],
					p2 = trackCoords[trackCoordIndex],
					heading = Math.atan2(p2[0]-p1[0], p2[1]-p1[1])
				;
				return [point, lastTrackCoordIndex, clockwise ? heading : heading - Math.PI];
			}
			else {
				point = trackPoint;
				distance = distance - distanceToNextTrackPoint;
			}
		}
	}
};

});